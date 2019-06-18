import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Textarea from 'ui/components/Textarea';
import CancelIcon from 'ui/assets/images/cancel.svg';
import Styled from './Task.styled';

const Task = ({
  text,
  onChange,
  onBlur,
  onEnter,
  onEscape,
  isActive,
  deletable,
  onDelete,
  ...rest
}) => {
  const textarea = useRef(null);
  const [isActiveState, setIsActive] = useState(isActive);

  useEffect(() => textarea.current.focus());

  return (
    <Styled
      {...rest}
      onDoubleClick={() => {
        setIsActive(true);
      }}
      isActive={isActiveState}
      deletable
    >
      {text}
      <Textarea
        ref={textarea}
        onBlur={(event) => {
          onBlur(event);
          setIsActive(false);
        }}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            event.preventDefault();
          }
        }}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            onEnter(event);
          }

          if (event.key === 'Escape') {
            onEscape(event);
          }
        }}
        value={text}
      />
      {deletable && <CancelIcon onClick={() => onDelete()} />}
    </Styled>
  );
};

Task.defaultProps = {
  text: '',
  isActive: false,
  deletable: true,
  onBlur: () => null,
  onEnter: () => null,
  onEscape: () => null,
  onDelete: () => null,
};

Task.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  onEscape: PropTypes.func,
  isActive: PropTypes.bool,
  deletable: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default Task;

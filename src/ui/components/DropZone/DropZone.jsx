import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Styled from './DropZone.styled';

const DropZone = ({ children, onDragOver, onDrop, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const dropZone = useRef(null);

  let dragCounter = 0;

  return (
    <Styled
      {...rest}
      ref={dropZone}
      onDragEnter={() => {
        dragCounter += 1;
        setIsActive(true);
      }}
      onDragLeave={() => {
        dragCounter -= 1;
        if (dragCounter < 0) {
          setIsActive(false);
        }
      }}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOver(event);
      }}
      onDrop={(event) => {
        onDrop(event);
        setIsActive(false);
      }}
      isActive={isActive}
    >
      {children}
    </Styled>
  );
};

DropZone.defaultProps = {
  children: null,
  onDragOver: () => null,
  onDrop: () => null,
};

DropZone.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
};

export default DropZone;

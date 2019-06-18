import { colors } from 'ui/Styles';
import styled from 'styled-components';

export default styled.textarea`
  display: block;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${colors.darkGrey};
  width: ${(props) => props.fluid && '100%'}

  &:focus {
    border-color: ${colors.blue};
  }
`;

import { colors } from 'ui/Styles'
import { TextareaStyled } from 'ui/components/Textarea'
import styled from 'styled-components'

export default styled.div`
  background-color: ${colors.white};
  border-radius: 3px;
  padding: 0.5rem;
  padding-right: ${(props) => (props.deletable ? '2rem' : '0.5rem')};
  border: 1px solid
    ${(props) => (props.isActive ? colors.darkGrey : colors.grey)};
  color: ${(props) => (props.isActive ? 'transparent' : colors.darkGrey)};
  position: relative;
  min-height: 2.25rem;

  &[draggable] {
    cursor: pointer;
  }

  ${TextareaStyled} {
    background-color: transparent;
    border: none;
    resize: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    padding-right: ${(props) => (props.deletable ? '2rem' : '0.5rem')};
  }

  svg {
    fill: ${colors.grey};
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      fill: ${colors.red};
    }
  }
`

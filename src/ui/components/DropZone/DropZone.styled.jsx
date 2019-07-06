import { colors } from 'ui/Styles'
import styled from 'styled-components'

export default styled.div`
  background-color: ${(props) =>
    props.isActive ? colors.grey : colors.lightGrey};
  transition: 0.125s;
`

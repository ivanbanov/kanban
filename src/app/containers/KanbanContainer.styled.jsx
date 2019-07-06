import styled from 'styled-components'
import { colors } from 'ui/Styles'

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.grey};

  h2 {
    margin: 0;
  }
`

export const Kanban = styled.div`
  display: flex;
  flex: 1;

  > * {
    height: 100%;
    flex: 1;
    border-left: 1px solid ${colors.grey};

    &:first-child {
      border-left: 0;
    }
  }
`

export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

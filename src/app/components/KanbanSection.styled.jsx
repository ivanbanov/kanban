import styled from 'styled-components';
import { colors } from 'ui/Styles';

import { TaskStyled } from 'ui/components/Task';
import { DropZoneStyled } from 'ui/components/DropZone';

export const TaskTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey};
  align-items: center;

  svg {
    fill: ${colors.blue};
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TaskContainer = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  overflow-y: auto;
`;

export default styled.div`
  ${DropZoneStyled} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${TaskStyled} {
    margin-top: 0.5rem;
  }
`;

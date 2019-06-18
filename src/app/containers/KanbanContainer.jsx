import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import Styled, { Header, Kanban } from './KanbanContainer.styled';
import KanbanSection from '../components/KanbanSection';
import { actions, selectors } from '../redux';
import { TASK_STATUS } from '../constants';

const KanbanContainer = ({
  tasksByStatus,
  lastUpdate,
  createTask,
  deleteTask,
  updateTask,
  searchTask,
  searchText,
}) => (
  <Styled>
    <Header>
      <span>
        <strong>Search</strong>{' '}
        <input
          onInput={(event) => searchTask(event.target.value)}
          defaultValue={searchText}
        />
      </span>
      {lastUpdate && (
        <span>
          <strong>Last update:</strong>{' '}
          {format(new Date(lastUpdate), 'DD/MMM/YYYY hh:mm:ssa')}
        </span>
      )}
    </Header>
    <Kanban>
      {Object.values(TASK_STATUS).map((status) => (
        <KanbanSection
          key={status}
          tasks={tasksByStatus.get(status, new Immutable.List())}
          status={status}
          createTask={createTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </Kanban>
  </Styled>
);

KanbanContainer.defaultProps = {
  lastUpdate: null,
  searchText: null,
};

KanbanContainer.propTypes = {
  tasksByStatus: PropTypes.instanceOf(Immutable.OrderedMap).isRequired,
  lastUpdate: PropTypes.number,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  searchTask: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};

const mapStateToProps = ({ kanban }) => ({
  tasksByStatus: selectors.tasksByStatus(kanban),
  lastUpdate: kanban.get('lastUpdate'),
  searchText: kanban.get('search'),
});

const mapDispatchToProps = {
  createTask: actions.task.create,
  deleteTask: actions.task.delete,
  updateTask: actions.task.update,
  searchTask: actions.search,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KanbanContainer);

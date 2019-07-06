import React, { useState } from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import DropZone from 'ui/components/DropZone'
import Task from 'ui/components/Task'
import PlusIcon from 'ui/assets/images/plus.svg'

import Styled, { TaskTitle, TaskContainer } from './KanbanSection.styled'
import { TASK_STATUS } from '../constants'

const TITLE_TASK_STATUS = {
  [TASK_STATUS.TODO]: 'TODO',
  [TASK_STATUS.IN_PROGRESS]: 'In Progress',
  [TASK_STATUS.DONE]: 'Done',
}

const DATATRANSFER_KEY = 'taskId'

const KanbanSection = ({
  status,
  tasks,
  createTask,
  deleteTask,
  updateTask,
}) => {
  const [isVisibleNewTask, setIsVisibleNewTask] = useState(false)
  const [newTaskText, setNewTaskText] = useState('')

  const reset = () => {
    setNewTaskText('')
    setIsVisibleNewTask(false)
  }

  return (
    <Styled>
      <DropZone
        onDrop={(event) => {
          updateTask({
            id: event.dataTransfer.getData(DATATRANSFER_KEY),
            status,
          })
        }}
      >
        <TaskTitle>
          {TITLE_TASK_STATUS[status]}
          <PlusIcon onClick={() => setIsVisibleNewTask(true)} />
        </TaskTitle>
        <TaskContainer>
          {isVisibleNewTask && (
            <Task
              isActive
              draggable
              deletable={false}
              onDragStart={(event) =>
                event.dataTransfer.setData(DATATRANSFER_KEY, 1)
              }
              onChange={(event) => {
                setNewTaskText(event.target.value)
              }}
              onBlur={() => {
                setNewTaskText('')
                setIsVisibleNewTask(false)
              }}
              onEnter={(event) => {
                const text = event.target.value
                setNewTaskText('')
                if (text) {
                  createTask({ text, status })
                }
              }}
              onEscape={reset}
              text={newTaskText}
            />
          )}
          {tasks.map((task) => (
            <Task
              key={task.get('id')}
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('taskId', task.get('id'))
              }}
              onChange={(event) => {
                updateTask({
                  id: task.get('id'),
                  text: event.target.value,
                })
              }}
              onEnter={(event) => {
                if (event.target.value === '') {
                  deleteTask(task.get('id'))
                } else {
                  event.target.blur()
                }
              }}
              isActive={false}
              text={task.get('text')}
              onDelete={() => {
                deleteTask(task.get('id'))
              }}
            />
          ))}
        </TaskContainer>
      </DropZone>
    </Styled>
  )
}

KanbanSection.propTypes = {
  tasks: PropTypes.instanceOf(Immutable.List).isRequired,
  status: PropTypes.oneOf(Object.values(TASK_STATUS)).isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
}

export default KanbanSection

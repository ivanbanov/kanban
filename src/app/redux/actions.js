import { createActions } from 'redux-actions'

const actions = createActions({
  search: null,
  task: {
    CREATE: null,
    DELETE: null,
    UPDATE: null,
  },
})

export default actions

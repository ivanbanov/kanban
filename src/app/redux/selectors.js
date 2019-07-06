import removeAccents from 'remove-accents'

export const tasksForSearch = (state) => {
  if (!state.get('search')) {
    return state.get('tasks')
  }

  return state.get('tasks').filter((task) => {
    const parsedText = JSON.stringify(state.get('search')).slice(1, -1)
    const withoutAccents = removeAccents(parsedText)
    const regExp = new RegExp(withoutAccents, 'i')
    return regExp.test(removeAccents(task.get('text')))
  })
}

export const tasksByStatus = (state) =>
  tasksForSearch(state)
    .groupBy((task) => task.get('status'))
    .map((listMap) => listMap.toList().reverse())

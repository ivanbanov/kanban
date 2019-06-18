import { Map, OrderedMap } from 'immutable';
import { handleActions } from 'redux-actions';
import uuid from 'uuid';

import actions from './actions';
import { TaskRecord } from './records';

export const initialState = new Map({
  tasks: new OrderedMap(),
  search: null,
  lastUpdate: null,
});

const withLastUpdate = (state) => state.set('lastUpdate', +new Date());

export default handleActions(
  {
    [actions.task.create]: (state, { payload }) => {
      const { status, text } = payload;
      const id = uuid.v4();
      return state.withMutations((mutable) =>
        withLastUpdate(mutable).setIn(
          ['tasks', id],
          new TaskRecord({
            id,
            status,
            text,
          }),
        ),
      );
    },

    [actions.task.delete]: (state, { payload }) =>
      state.withMutations((mutable) =>
        withLastUpdate(mutable).deleteIn(['tasks', payload]),
      ),

    [actions.task.update]: (state, { payload }) => {
      const { id, text, status } = payload;
      return state.withMutations((mutable) => {
        const selector = ['tasks', id];
        const task = mutable.getIn(selector);
        let newState = withLastUpdate(mutable);

        if (status && task.get('status') !== status) {
          newState = newState.deleteIn(selector);
        }

        return newState.mergeIn(selector, {
          id,
          status: status || task.get('status'),
          text: text == null ? task.get('text') : text,
        });
      });
    },

    [actions.search]: (state, { payload }) => state.set('search', payload),
  },
  initialState,
);

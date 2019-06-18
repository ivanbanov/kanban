import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import { reducer } from './redux';

const { initialState } = reducer;

const persistedReducer = persistReducer(
  {
    transforms: [immutableTransform()],
    key: 'root',
    storage,
  },
  combineReducers({ kanban: reducer }),
);

const store = createStore(
  persistedReducer,
  initialState,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);
export default store;

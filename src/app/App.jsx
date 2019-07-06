// HMR
import { hot } from 'react-hot-loader/root'
import { setConfig } from 'react-hot-loader'

// App
import React from 'react'
import Styles from 'ui/Styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import KanbanContainer from './containers/KanbanContainer'
import store, { persistor } from './store'

setConfig()

const App = () => (
  <React.Fragment>
    <Styles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <KanbanContainer />
      </PersistGate>
    </Provider>
  </React.Fragment>
)

export default hot(App)

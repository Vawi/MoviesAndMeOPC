import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux'
import Store from './src/store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>
    );
  }
}

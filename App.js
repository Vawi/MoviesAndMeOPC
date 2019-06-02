import React from 'react';
import { Provider } from 'react-redux'
import Store from './src/store/configureStore'
import Navigation from './src/navigation/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}


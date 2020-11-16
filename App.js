import React from 'react';
import { Provider } from 'react-redux';
import AppStack from './src/routes/AppStack';
import store from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;

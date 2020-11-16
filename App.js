import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppStack from './src/routes/AppStack';
import { store, persistor } from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

export default App;

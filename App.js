import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppStack from './src/routes/AppStack';
import { buildStore } from './src/store';

const App = () => {
  const { store, persistor } = buildStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

export default App;

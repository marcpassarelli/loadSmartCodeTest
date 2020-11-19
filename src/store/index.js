import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './modules/auth/reducer';
import userReducer from './modules/user/reducer';
import AsyncStorage from '@react-native-community/async-storage';

export function buildStore() {
  const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
  });

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return { store, persistor };
}

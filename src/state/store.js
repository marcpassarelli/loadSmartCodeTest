import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './auth/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock-jest';
import expect from 'expect'; // You can use any testing library
import actionTypes from '../../../src/store/modules/user/actionTypes';
import { getUser } from '../../../src/store/modules/user/actions';
import userReducer from '../../../src/store/modules/user/reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_USER when fetching for users info has been done', () => {
    fetchMock.getOnce('https://api.github.com/user', {
      body: {
        name: 'Marc Victor',
        avatar_url: 'photo.jpg',
        login: 'marcpassarelli',
        location: 'SP',
        bio: 'Hello',
      },
    });

    const expectedActions = [
      {
        type: actionTypes.SET_USER,
        userInfo: {
          name: 'Marc Victor',
          avatar_url: 'photo.jpg',
          login: 'marcpassarelli',
          location: 'SP',
          bio: 'Hello',
        },
      },
    ];
    const store = mockStore({});

    return store.dispatch(getUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});

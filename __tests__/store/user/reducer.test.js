import userReducer, {
  initialState,
} from '../../../src/store/modules/user/reducer';
import actionTypes from '../../../src/store/modules/user/actionTypes';

describe('UserReducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setUser', () => {
    expect(
      userReducer([], {
        type: actionTypes.SET_USER,
        userInfo: {
          name: 'Marc Victor',
          avatar_url: 'photo.jpg',
          login: 'marcpassarelli',
          location: 'SP',
          bio: 'Hello',
        },
      }),
    ).toEqual({
      userInfo: {
        name: 'Marc Victor',
        avatar_url: 'photo.jpg',
        login: 'marcpassarelli',
        location: 'SP',
        bio: 'Hello',
      },
    });

    expect(
      userReducer(
        {
          userInfo: {
            name: 'Marc Victor',
            avatar_url: 'photo.jpg',
            login: 'marcpassarelli',
            location: 'SP',
            bio: 'Hello',
          },
        },

        {
          type: actionTypes.SET_USER,
          userInfo: {},
        },
      ),
    ).toEqual({
      userInfo: {},
    });
  });
});

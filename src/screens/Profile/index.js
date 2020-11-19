import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/modules/auth/actions';
import { getUser, setUser } from '../../store/modules/user/actions';

import styles from './styles';

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const authInfo = useSelector((state) => state.auth.authInfo);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUser(authInfo.accessToken)).then(() => {
      setLoading(false);
    });
  }, [authInfo.accessToken, dispatch]);

  useEffect(() => navigation.addListener('beforeRemove', handleBeforeRemove), [
    handleBeforeRemove,
    navigation,
  ]);

  const handleBeforeRemove = useCallback(
    (event) => {
      event.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        'Logout',
        'Do you want to logout and go back to the login screen?',
        [
          { text: 'No', style: 'cancel', onPress: () => {} },
          {
            text: 'Logout',
            style: 'destructive',
            // If the user confirmed, then we dispatch the action blocked earlier with preventDefault
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              dispatch(logout());
              dispatch(setUser({}));
              navigation.dispatch(event.data.action);
            },
          },
        ],
      );
    },
    [navigation, dispatch],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Profile Screen</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          <View style={styles.profileArea}>
            <Image
              source={{
                uri: userInfo.avatar_url,
              }}
              style={styles.profileImg}
            />

            <Text style={styles.textName}>{userInfo.name}</Text>
            <Text style={styles.textProfileInfo}>{userInfo.login}</Text>
            <Text style={styles.textProfileInfo}>{userInfo.location}</Text>
            {userInfo.bio && (
              <View style={styles.areaBio}>
                <Text style={styles.textProfileInfo}>{userInfo.bio}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutText}>Click here to logout</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;

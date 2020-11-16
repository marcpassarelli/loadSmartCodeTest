import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/auth/actions';

import styles from './styles';

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        <Text style={styles.textProfileInfo}>{userInfo.bio}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Logout?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

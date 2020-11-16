import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';

import ButtonWithLogo from './ButtonWithLogo';

import backgroundImg from '../../assets/background.jpg';

import styles from './styles';
import { loginGithub } from '../../state/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);

  const goToProfile = () => {
    navigate('Profile');
  };

  const login = async () => {
    setLoading(true);
    await dispatch(loginGithub());
    setLoading(false);
    goToProfile();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={styles.buttonArea}>
            <ButtonWithLogo onPress={login} />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

//export your list as a default export
export default Login;

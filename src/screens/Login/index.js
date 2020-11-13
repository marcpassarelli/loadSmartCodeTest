import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, SafeAreaView, Text, ImageBackground } from 'react-native';

import gitHubLogo from '../../assets/logo.png';
import markLogo from '../../assets/mark.png';
import backgroundImg from '../../assets/background.jpg';

import CustomButton from '../../components/Button';
import TextInputWithTitle from './TextInputWithTitle';

import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  const goToProfile = () => {
    navigate('Profile');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        <View style={styles.logoAreaTop}>
          <Text style={styles.title}>Sign in to</Text>
          <Image source={gitHubLogo} style={styles.logo} />
        </View>
        <View style={styles.formArea}>
          <TextInputWithTitle title="Username or email" />
          <TextInputWithTitle title="Password" secureTextEntry={true} />
          <CustomButton
            text="Login"
            onPress={() => {
              goToProfile();
            }}
          />
        </View>
        <Image source={markLogo} style={styles.logoBottom} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

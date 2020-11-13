import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import gitHubLogo from '../../assets/logo.png';
import markLogo from '../../assets/mark.png';
import CustomButton from '../../components/Button';

import styles from './styles';
import TextInputWithTitle from './TextInputWithTitle';

const Login = () => {
  const { navigate } = useNavigation();

  const goToProfile = () => {
    navigate('Profile');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoAreaTop}>
        <Text style={styles.title}>Sign in to</Text>
        <Image source={gitHubLogo} style={styles.logo} />
      </View>
      <View style={styles.formArea}>
        <TextInputWithTitle title="Username or email" />
        <TextInputWithTitle title="Password" />
        <CustomButton
          text="Login"
          onPress={() => {
            goToProfile();
          }}
        />
      </View>
      <Image source={markLogo} style={styles.logoBottom} />
    </SafeAreaView>
  );
};

export default Login;

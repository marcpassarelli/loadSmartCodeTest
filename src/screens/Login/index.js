import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigate('Profile');
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

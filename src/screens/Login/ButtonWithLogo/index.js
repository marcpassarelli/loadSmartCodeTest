import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import markLogo from '../../../assets/mark.png';
import gitHubLogo from '../../../assets/logo.png';
import styles from './styles';

const ButtonWithLogo = ({ text, onPress }) => {
  return (
    <TouchableOpacity testID={'button'} style={styles.button} onPress={onPress}>
      <Image source={markLogo} style={styles.markLogo} />
      <Text style={[styles.textButton]}>Login with</Text>
      <Image source={gitHubLogo} style={styles.githubLogo} />
    </TouchableOpacity>
  );
};

export default ButtonWithLogo;

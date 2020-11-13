import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

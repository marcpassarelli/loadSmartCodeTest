import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

const Button = ({ text, onPress, transparent }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        transparent && { backgroundColor: 'rgba(0,0,0,0)' },
      ]}
      onPress={onPress}>
      <Text style={[styles.textButton, transparent && { color: '#000' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

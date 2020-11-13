import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';

const TextInputWithTitle = (props) => {
  return (
    <View>
      <Text style={styles.titleTextInput}>{props.title}</Text>
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
};

export default TextInputWithTitle;

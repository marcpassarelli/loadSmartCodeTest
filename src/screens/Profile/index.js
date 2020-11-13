import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import markLogo from '../../assets/mark.png';
import Button from '../../components/Button';
import styles from './styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Profile Screen</Text>
      <View style={styles.profileArea}>
        <Image
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/25596926?s=460&u=da3961b56881521ab0a36daec5214456fde9fdd1&v=4',
          }}
          style={styles.profileImg}
        />

        <Text style={styles.textName}>Marc Victor</Text>
        <Text style={styles.textProfileInfo}>marcpassarelli</Text>
        <Text style={styles.textProfileInfo}>São José</Text>
        <Text style={styles.textProfileInfo}>
          Eu sou formado em engenharia da computação desde 2013
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <Button text="Logout" transparent={true} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

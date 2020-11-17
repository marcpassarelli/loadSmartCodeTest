import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonWithLogo from './ButtonWithLogo';
import backgroundImg from '../../assets/background.jpg';
import {
  getNewAccessToken,
  loginGithub,
} from '../../store/modules/auth/actions';
import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const accessTokenExpirationDate = useSelector(
    (state) => state.auth.accessTokenExpirationDate,
  );

  const refreshToken = useSelector((state) => state.auth.refreshToken);

  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    if (accessTokenExpirationDate) {
      if (currentDate > accessTokenExpirationDate) {
        setLoading(false);
        navigate('Profile');
      } else {
        handleRefresh();
      }
    }
  }, [
    navigate,
    dispatch,
    accessTokenExpirationDate,
    refreshToken,
    handleRefresh,
  ]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewAccessToken(refreshToken));
  }, [dispatch, refreshToken]);

  const login = async () => {
    setLoading(true);
    await dispatch(loginGithub());
    setLoading(false);
    navigate('Profile');
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

export default Login;

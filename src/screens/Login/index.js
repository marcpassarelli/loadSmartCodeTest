import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonWithLogo from './ButtonWithLogo';
import backgroundImg from '../../assets/background.jpg';
import { getNewAccessToken } from '../../store/modules/auth/actions';
import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const accessTokenExpirationDate = useSelector(
    (state) => state.auth?.authInfo?.accessTokenExpirationDate,
  );

  const refreshToken = useSelector(
    (state) => state.auth?.authInfo?.refreshToken,
  );

  const isLogged = useSelector((state) => state.auth?.isLogged);

  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    const dateAccessTokenExpiration = new Date(accessTokenExpirationDate);
    if (accessTokenExpirationDate) {
      if (currentDate < dateAccessTokenExpiration) {
        setLoading(false);
        navigate('Profile');
      } else {
        handleRefresh();
      }
    } else {
      setLoading(false);
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
    await dispatch(getNewAccessToken());
    setLoading(false);

    if (isLogged) {
      navigate('Profile');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Text style={styles.title}>Loadsmart Mobile Test</Text>
            <View style={styles.buttonArea}>
              <ButtonWithLogo onPress={login} />
            </View>
          </>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

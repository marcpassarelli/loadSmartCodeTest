import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  formArea: { width: '60%', height: '30%', justifyContent: 'space-around' },
  logoAreaTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: { fontSize: 20 },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  logoBottom: { position: 'absolute', bottom: 100 },
});

export default styles;

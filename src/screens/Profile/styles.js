import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginVertical: 20, color: '#00aa60' },
  profileArea: { flex: 1, alignItems: 'center', marginHorizontal: 20 },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0.5,
    borderColor: '#00FF60',
  },
  textName: { fontSize: 16, marginVertical: 5 },
  textProfileInfo: { fontSize: 14, marginVertical: 5, color: '#808080' },
  buttonArea: {
    width: '60%',
  },
  logoutText: {
    marginBottom: 30,
    fontSize: 14,
  },
  areaBio: {
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#00aa60',
  },
});

export default styles;

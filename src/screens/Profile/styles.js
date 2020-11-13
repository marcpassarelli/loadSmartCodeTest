import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginVertical: 20 },
  profileArea: { flex: 1, alignItems: 'center', marginHorizontal: 20 },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textName: { fontSize: 16, marginVertical: 5 },
  textProfileInfo: { fontSize: 14, marginVertical: 5, color: '#808080' },
  buttonArea: {
    width: '60%',
  },
});

export default styles;

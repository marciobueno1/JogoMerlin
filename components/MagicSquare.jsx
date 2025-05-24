import { StyleSheet, TouchableOpacity, View } from 'react-native';

export function MagicSquare({ value, onPress }) {
    const backgroundColor = value ? 'red' : 'blue';
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <View style={[styles.squareView, { backgroundColor }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    square:{
        width: 80,
        height: 80,
        backgroundColor: '#F2E0D2',
        borderWidth: 1,
        borderColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 3,
    },
    squareView: {
        height: 20,
        width: 20,
    },
})
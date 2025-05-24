import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Square({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.squareText}>{value}</Text>
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
    squareText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
})
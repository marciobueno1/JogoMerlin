import { StyleSheet, View } from "react-native";
import { Square } from "./square"

export function Board({ xIsNext, squares, onPlay }) {
  
  return (
    <View>
      {[0, 1, 2].map(row => (
        <View key={row} style={styles.boardRow}>
          {[0, 1, 2].map(col => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onPress={() => handleClick(index)}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    boardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
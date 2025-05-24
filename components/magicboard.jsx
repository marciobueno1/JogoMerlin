import { StyleSheet, View } from "react-native";
import { MagicSquare } from "./MagicSquare";

export function MagicBoard({ squares, handleClick }) {
  console.log('squares', squares);
  console.log('handleClick', handleClick);
  return (
    <View>
      {[0, 1, 2].map(row => (
        <View key={'view - $ {i}'} style={styles.boardRow}>
          {[0, 1, 2].map(col => {
            const index = row * 3 + col;
            return (
              <MagicSquare
                key={index}
                value={squares[row][col]}
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
import { StyleSheet, View, Text, Alert } from "react-native";
import { Square } from "./Square"


 export  function Board({ xIsNext, squares, onPlay, resetGame }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  
  const status = winner ? winnerAlert(winner) : 'Next player: ' + (xIsNext ? 'X' : 'O');

  function winnerAlert(winner){
    Alert.alert("Parabéns!", "Vencedor: " + winner, [
      {
        text: 'Jogar Novamente',
        onPress: () => resetGame(),
        
      },
    ]);
  }

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
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
    boardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  status: {
    marginTop: 20,
    fontSize: 23,
    alignSelf: "center"
  }
})
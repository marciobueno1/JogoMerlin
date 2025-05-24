import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { Board } from "../components/Board"



export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <View style={styles.container}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <ScrollView style={styles.moves}>
        {history.map((_, move) => {
          const description = move ? `Go to move #${move}` : 'Go to game start';
          return (
            <TouchableOpacity key={move} onPress={() => jumpTo(move)} style={styles.moveButton}>
              <Text style={styles.moveText}>{description}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2afbc',
  },
  status: {
    fontSize: 24,
    marginTop: 100,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  moves: {
    marginTop: 30,
  },
  moveButton: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginVertical: 5,
    borderRadius: 5,
  },
  moveText: {
    fontSize: 16,
  },
});

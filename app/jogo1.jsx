import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Board } from '../components/Board';

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

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Velha</Text>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} resetGame={resetGame}/>
      <TouchableOpacity onPress={resetGame} style={styles.moveButton}>
        <Text style={styles.moveText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#f2afbc',
  },
  titulo:{
    fontSize: 35,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 50,

  },
  moveButton: {
    padding: 10,
    backgroundColor: '#f0d4bf',
    marginTop: 30,
    width: 250,
    borderRadius: 15,
  },
  moveText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
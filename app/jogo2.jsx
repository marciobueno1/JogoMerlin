
import { StyleSheet, View } from 'react-native';
import { MagicBoard } from '../components/magicboard';


export default function Jogo2() {
    const preencheAleatorio = () => {
      return Array(3).fill().map(() =>
        Array(3).fill().map(() => Math.random() < 0.5)
      );
    };

    var matriz = preencheAleatorio();

    return (
        <View style={styles.container}>
        <MagicBoard squares={matriz} />
        </View>
        );
    };


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

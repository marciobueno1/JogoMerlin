import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Lista de Jogos</Text>
      <Link href="/jogo1">Jogo 1</Link>
      <Link href="/jogo2">Jogo 2</Link>
    </View>
  );
}

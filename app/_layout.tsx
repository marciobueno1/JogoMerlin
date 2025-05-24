import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Inicio", headerShown: false }}
      />
      <Stack.Screen name="jogo1" options={{ title: "Jogo da Velha" }} />
      <Stack.Screen name="jogo2" options={{ title: "Quadrado Mágico" }} />
    </Stack>
  );
}

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="jogo1" options={{ title: "Jogo 1" }} />
      <Stack.Screen name="jogo2" options={{ title: "Jogo 2" }} />
    </Stack>
  );
}

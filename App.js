import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Push from "./Screens/Push";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Push />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

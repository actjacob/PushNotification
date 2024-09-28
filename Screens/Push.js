import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Push = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Push Notification in react native</Text>
    </View>
  );
};

export default Push;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
  },
});

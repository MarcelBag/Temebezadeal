import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SafeArea,
  SafeAreaViewSafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Vente"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

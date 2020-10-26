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
  Platform,
  View,
  Dimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

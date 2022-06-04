import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "./src/components/Search";
import Cart from "./src/components/Cart";
import { Rating } from "react-native-ratings";

const App = () => {
  return (
    // return <Search />;
    <Search />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

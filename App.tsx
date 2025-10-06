import React from "react";
import { View, StatusBar } from "react-native";
import Home from "./Home";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Home />
    </View>
  );
};

export default App;
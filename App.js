import React from "react";
import { View } from "react-native";
import AddEntry from "./Components/AddEntry";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}

import React from "react";
import { Text, View, Slider } from "react-native";

export default function SliderComp({ max, units, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{units}</Text>
      </View>
    </View>
  );
}

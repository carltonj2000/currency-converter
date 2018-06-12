import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFF",
  $lightGray: "#D0D0D0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434",
  $outline: 0
});

//import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";

//export default () => <Home />;
export default () => <CurrencyList />;

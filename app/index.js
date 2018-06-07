import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFF",
  $border: "#E2E2E2",
  $lightGray: "#D0D0D0"
});

import Home from "./screens/Home";

export default () => <Home />;

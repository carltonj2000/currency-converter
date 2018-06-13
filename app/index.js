import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrgane: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#FFF",
  $lightGray: "#D0D0D0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434",
  $outline: 0
});

export default () => <Navigator />;

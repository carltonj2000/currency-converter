import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";

const InputWithButton = props => {
  const { buttonText, onPress, editable = true, textColor } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyles = [styles.container];
  if (!editable) containerStyles.push(styles.containerDisabled);
  const textStyles = [styles.buttonText];
  if (textColor) textStyles.push({ color: textColor });

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={textStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string
};

export default InputWithButton;

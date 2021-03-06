import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  Animated,
  StyleSheet,
  Platform
} from "react-native";

import styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  componentDidMount() {
    let showListener = "keyboardWillShow";
    let hideListener = "keyboardWillHide";
    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardShowListener.remove();
  }
  render = () => {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];
    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            source={require("./images/background.png")}
            style={[StyleSheet.absoluteFill, containerImageStyle]}
          />
          <Animated.Image
            source={require("./images/logo.png")}
            style={imageStyle}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  };
}

export default Logo;

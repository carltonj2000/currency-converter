import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import Icon from "./Icon";

const ListItem = ({
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);
/*
*/
ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  onPress: PropTypes.func
};
export default ListItem;

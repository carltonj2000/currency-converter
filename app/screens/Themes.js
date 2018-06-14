import React, { Component } from "react";
import { StatusBar, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ListItem, Separator } from "../components/List";
import { changePrimaryColor } from "../actions/themes";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $orange: "$primaryOrgane",
  $green: "$primaryGreen",
  $purple: "$primaryPurple"
});

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handleThemesPress = color => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };
  render = () => {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="blue"
          onPress={() => this.handleThemesPress(styles.$blue)}
          checkmark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="orange"
          onPress={() => this.handleThemesPress(styles.$orange)}
          checkmark={false}
          selected
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="green"
          onPress={() => this.handleThemesPress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="purple"
          onPress={() => this.handleThemesPress(styles.$purple)}
          checkmark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  };
}

export default connect()(Options);

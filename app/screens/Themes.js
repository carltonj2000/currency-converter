import React, { Component } from "react";
import { StatusBar, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { ListItem, Separator } from "../components/List";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $orange: "$primaryOrgane",
  $green: "$primaryGreen",
  $purple: "$primaryPurple"
});

class Options extends Component {
  handleThemesPress = color => {
    console.log("themes", color);
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

export default Options;

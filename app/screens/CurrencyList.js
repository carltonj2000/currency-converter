import React, { Component } from "react";
import { FlatList, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import currencies from "../data/currencies";

import { ListItem, Separator } from "../components/List";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };
  render = () => {
    const currentCurrency =
      this.props.navigation.state.params.type === "base"
        ? this.props.baseCurrency
        : this.props.quoteCurrency;
    return (
      <View styles={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  };
}

const mapStateToProps = state => ({ ...state.currencies, ...state.themes });
export default connect(mapStateToProps)(CurrencyList);

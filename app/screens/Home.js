import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";
import { swapCurrencies, changeCurrencyAmount } from "../actions/currencies";

class Home extends Component {
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };
  handleTextChange = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handleSwapCurrencies = () => {
    this.props.dispatch(swapCurrencies());
  };
  handleSetup = () => {
    this.props.navigation.navigate("Options", { title: "Options" });
  };
  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      lastConvertedDate
    } = this.props;
    let quotePrice = (amount * conversionRate).toFixed(2);
    if (this.props.isFetching) quotePrice = "...";
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleSetup} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            editable={false}
            buttonText={quoteCurrency}
            defaultValue={quotePrice}
            onPress={this.handlePressQuoteCurrency}
          />
          <LastConverted
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <ClearButton
            text="Swap Currencies"
            onPress={this.handleSwapCurrencies}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = ({ currencies }) => {
  const { baseCurrency, quoteCurrency, amount } = currencies;
  const conversionSelector = currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const { date } = conversionSelector;

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching || false,
    lastConvertedDate: date ? new Date(date) : new Date()
  };
};
export default connect(mapStateToProps)(Home);

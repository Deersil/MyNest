import React, { Component } from 'react';
import DropdownPicker from './DropdownPicker';
// import styled from 'styled-components';
class CurrencyPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'usd',
      values: [{
        key: 'usd',
        value: '$',
      }, {
        key: 'rub',
        value: '₽',
      }],
    };
    this.setCurrency = this.setCurrency.bind(this);
  }
  setCurrency(key) {
    this.setState({
      current: key,
    });
  }
  render() {
    return (
      <DropdownPicker
        onChange={this.setCurrency}
        value={this.state.current}
        values={this.state.values}
      />);
  }
}

export default CurrencyPicker;

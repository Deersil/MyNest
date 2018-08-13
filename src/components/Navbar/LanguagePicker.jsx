import React, { Component } from 'react';
import DropdownPicker from './DropdownPicker';

class LanguagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: 'en',
      items: [{
        key: 'ru',
        value: 'Русский',
      }, {
        key: 'en',
        value: 'English',
      }],
    };
    this.pickLanguage = this.pickLanguage.bind(this);
  }
  pickLanguage(key) {
    this.setState({
      currentLang: key,
    });
  }
  render() {
    return (
      <DropdownPicker
        onChange={this.pickLanguage}
        value={this.state.currentLang}
        values={this.state.items}
      />
    );
  }
}

export default LanguagePicker;

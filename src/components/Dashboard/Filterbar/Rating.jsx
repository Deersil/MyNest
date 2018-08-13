import React, { Component } from 'react';
import { Slider } from 'element-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 0 15px;
`;
const Label = styled.label`
`;

class RatingPicker extends Component {
  static defaultProps = {
    onChange: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      limits: 100,
    };
  }
  formatTooltip = value => value / 10
  handleChange = (value) => {
    this.props.onChange(value);
  }
  render() {
    const { limits } = this.state;
    return (
      <Wrapper>
        <Label>
          Rating
        </Label>
        <Slider
          value={limits}
          max={100}
          formatTooltip={this.formatTooltip}
        />
      </Wrapper>
    );
  }
}
RatingPicker.propTypes = {
  onChange: PropTypes.func,
};

export default RatingPicker;

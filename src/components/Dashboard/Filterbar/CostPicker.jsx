import React, { Component } from 'react';
import { Slider } from 'element-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 0 15px;
  margin-top: 15px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e6d82;
`;
const HeaderItem = styled.div`
  font-size: 18px;
`;

class CostPicker extends Component {
  static defaultProps = {
    max: 100,
    onChange: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      limits: [0, props.max],
      value: [0, props.max],
    };
  }
  handleChange = (value) => {
    this.setState({
      value,
    }, () => {
      this.props.onChange({
        cost: value,
      });
    });
  }
  render() {
    const { limits, value } = this.state;
    return (
      <Wrapper>
        <Header>
          <HeaderItem>
            {`${value[0]}$`}
          </HeaderItem>
          -
          <HeaderItem>
            { `${value[1]}$`}
          </HeaderItem>
        </Header>
        <Slider
          value={limits}
          max={limits[1]}
          onChange={this.handleChange}
          range
        />
      </Wrapper>
    );
  }
}
CostPicker.propTypes = {
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default CostPicker;

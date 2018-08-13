import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Checkbox } from 'element-react';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  .el-checkbox {
    margin: 5px 0;
  }
  .el-checkbox__label {
    margin-left: 5px;
    font-size: 16px;
  }
`;
const Label = styled.p`
  font-size: 15px;
  color: #8B8F9B;
  margin: 10px;
`;

class HotelsParams extends Component {
  static defaultProps = {
    onChange: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
    };
  }
  onChangeStars = (value) => {
    const { stars } = this.state;
    if (stars.indexOf(value) === -1) {
      this.setState({
        stars: [...stars, value],
      }, () => {
        this.emitChanges();
      });
    } else {
      this.setState({
        stars: stars.filter(item => item !== value),
      }, () => {
        this.emitChanges();
      });
    }
  }
  isPicked = (value) => {
    const { stars } = this.state;
    if (stars.indexOf(value) !== -1) {
      return true;
    }
    return false;
  }
  emitChanges = () => {
    const { onChange } = this.props;
    const { stars } = this.state;
    onChange({
      stars,
    });
  }
  render() {
    return (
      <Wrapper>
        <Label>
          Hotels stars
        </Label>
        <Checkbox
          checked={this.isPicked(5)}
          onChange={() => { this.onChangeStars(5); }}
        >
          5 stars
        </Checkbox>
        <Checkbox
          checked={this.isPicked(4)}
          onChange={() => { this.onChangeStars(4); }}
        >
          4 stars
        </Checkbox>
        <Checkbox
          checked={this.isPicked(3)}
          onChange={() => { this.onChangeStars(3); }}
        >
          3 stars
        </Checkbox>
        <Checkbox
          checked={this.isPicked(2)}
          onChange={() => { this.onChangeStars(2); }}
        >
          2 stars
        </Checkbox>
        <Checkbox
          checked={this.isPicked(1)}
          onChange={() => { this.onChangeStars(1); }}
        >
          1 star
        </Checkbox>
        <Label>
          Hotel type
        </Label>
        <Checkbox>
          Guest Houses
        </Checkbox>
        <Checkbox>
          Apartments
        </Checkbox>
        <Checkbox>
          House
        </Checkbox>
      </Wrapper>
    );
  }
}
HotelsParams.propTypes = {
  onChange: PropTypes.func,
};

export default HotelsParams;

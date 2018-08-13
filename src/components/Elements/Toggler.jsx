import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Circle = styled.div`
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  transition: all 0.4s;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 8px;
  flex: 0 0 37px;
  background: #232836;
  box-sizing: border-box;
  width: 37px;
  height: 20px;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s;
  ${Circle} {
    margin: 0 0 0 -17px;
  }
  &.active { 
    background: #FFB63D;
    ${Circle} {
      margin: 0 -17px 0 0;
    }
  }
`;

class Toggler extends Component {
  static defaultProps = {
    value: false,
    onChange: () => {},
  }
  constructor(props) {
    super(props);
    this.state = {
      active: props.value || false,
    };
    this.toggle = this.toggle.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.active === nextState.active) {
      return false;
    }
    return true;
  }
  toggle() {
    this.setState({
      active: !this.state.active,
    }, () => {
      this.props.onChange(this.state.active);
    });
  }
  render() {
    return (
      <Wrapper
        className={this.state.active ? 'active' : ''}
        onClick={this.toggle}
      >
        <Circle />
      </Wrapper>
    );
  }
}
Toggler.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggler;

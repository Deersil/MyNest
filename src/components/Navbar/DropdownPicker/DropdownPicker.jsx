import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icon from './triangle.svg';

const Label = styled.div`
  color: #C6C9CC;
  font-size: 13px;
`;
const Arrow = styled.div`
  border-left: 1px solid #606570;
  height: 20px;
  padding: 0 0 0 8px;
  margin-left: 15px;
`;

const Title = styled.div`
  height: 30px;
  border: 1px dashed #606570;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding: 0 8px 0 15px;
`;

const List = styled.ul`
  background: #fff;
  position: absolute;
  display: none;
  list-style-type: none;
  padding: 0;
  right: 0;
  min-width: 100%;
  margin: 0;
  top: 100%;
`;

const Item = styled.li`
  height: 30px;
  font-size: 14px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #c3c3c3;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 6px;
  cursor: pointer;
  z-index: 999;
  &:hover ${List} {
    display: block;
  }
`;

function findValue(values, key) {
  const item = values.find(val => val.key === key);
  if (item && item.value) {
    return item.value;
  }
  return null;
}

class DropdownPicker extends Component {
  static defaultProps = {
    values: [],
    value: null,
    onChange: () => {},
  }
  constructor(props) {
    const { values, value } = props;
    super(props);
    this.state = {
      value: findValue(values, value) || null,
      showed: false,
    };
    this.clickItem = this.clickItem.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { values, value } = nextProps;
    const { showed } = prevState;
    return {
      value: findValue(values, value) || null,
      showed,
    };
  }
  clickItem(key) {
    this.props.onChange(key);
  }
  toggleDropdown() {
    this.setState({
      showed: !this.state.showed,
    });
  }
  render() {
    return (
      <Wrapper>
        <Title onClick={this.toggleDropdown}>
          <Label>
          — {this.state.value}
          </Label>
          <Arrow>
            <img src={icon} alt="arrow" />
          </Arrow>
        </Title>
        <List className={this.state.showed ? 'showed' : ''}>
          {this.props.values.map(item => (
            <Item onClick={() => this.clickItem(item.key)} key={item.key}>
              {item.value}
            </Item>
            //  <Item
            // onClick={() => this.clickItem(item.key)}
            // key={item.key}>
            //   {item.value}
            // </Item>
          ))}
        </List>
      </Wrapper>
    );
  }
}
DropdownPicker.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    value: PropTypes.string,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

export default DropdownPicker;

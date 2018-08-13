import React, { Component } from 'react';
import styled from 'styled-components';
import ListIcon from '../../icons/ListIcon';
import MapIcon from '../../icons/MapIcon';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #C3C5CD;
  border-radius: 4px;
  height: 36px;
`;
const Item = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background: #C3C5CD;
  }
`;


class ToggleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
    };
    this.pickMap = this.pickMap.bind(this);
    this.pickList = this.pickList.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isList === nextState.isList) {
      return false;
    }
    return true;
  }
  pickMap() {
    this.setState({
      isList: false,
    });
  }
  pickList() {
    this.setState({
      isList: true,
    });
  }
  render() {
    const { isList } = this.state;
    return (
      <Wrapper>
        <Item
          onClick={this.pickList}
          className={isList && 'active'}
        >
          <ListIcon active={isList} />
        </Item>
        <Item
          className={!isList && 'active'}
          onClick={this.pickMap}
        >
          <MapIcon active={!isList} />
        </Item>
      </Wrapper>
    );
  }
}
export default ToggleView;

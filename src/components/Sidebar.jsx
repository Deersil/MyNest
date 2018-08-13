import React from 'react';
import styled from 'styled-components';
import hotelIcon from './icons/hotel.svg';

const Wrapper = styled.div`
  flex: 0 0 180px;
  display: flex;
  flex-flow: column nowrap;
  background: #323647;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  &.active {
    background: #787C8B;
  }
`;
const Icon = styled.img`
  margin: 0 20px;
  width: 17px;
  height: 17px;
`;
const Text = styled.span`
  color: #8B8F9B;
  font-size: 15px;
  .active & {
    color: #fff
  }
`;
const Sidebar = () => (
  <Wrapper>
    <Item className="active">
      <Icon src={hotelIcon} />
      <Text>
        Hotels
      </Text>
    </Item>
  </Wrapper>
);


export default Sidebar;

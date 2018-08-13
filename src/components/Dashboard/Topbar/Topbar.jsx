import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import ToggleView from './ToggleView';

const Wrapper = styled.div`
  height: 60px;
  padding: 0 20px;
  background: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #eaeefb;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.1);
`;
const Text = styled.p`
  color: #fff;
  font-size: 17px;
  margin: 0 30px;
`;

const Title = styled.span`
  font-size: 17px;
  color: #888C99;
  text-transform: uppercase;
`;

const LeftBlock = styled.div`
  margin-left: auto;
`;

const Topbar = props => (
  <Wrapper>
    <Title>
      Search
    </Title>
    <Text>
      {props.children}
    </Text>
    <LeftBlock />
    {/* <ToggleView /> */}
    {/* </LeftBlock> */}
  </Wrapper>
);
Topbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Topbar;

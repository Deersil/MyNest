import React from 'react';
import styled from 'styled-components';
import WideToggle from './WideToggle';
// import Usermenu from './Usermenu';
import UsermenuContainer from '../../containers/UsermenuContainer';

// import LanguagePicker from './LanguagePicker';
// import CurrencyPicker from './CurrencyPicker';

const Wrapper = styled.div`
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 35px;
  border-bottom: 1px solid #eaeefb;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.1);
`;
const Logo = styled.span`
  color: #8492a6;
  margin: 0 35px;
`;

const Navbar = () => (
  <Wrapper>
    <WideToggle />
    <Logo>
      MyNest
    </Logo>
    {/* <LanguagePicker />
    <CurrencyPicker /> */}
    {/* <Usermenu /> */}
    <UsermenuContainer />
  </Wrapper>
);


export default Navbar;

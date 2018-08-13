import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'element-react';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Wrapper = styled.div`
  width: 320px;
  min-height: 250px;
  background: #ddd;
  margin: auto;
  background: #fff;
  border: 1px solid #eaeefb;
`;
const TabsWrapper = styled.div`
  .el-tabs__nav {
    width: 100%;
    background: #fafafa; 
   
  }
  .el-tabs__item {
    width: 50%;
    text-align: center;
    /* color: #717A8E; */
    &.is-active {
      background: #fff;
      /* color: #fff; */
    }
  }
  .el-tabs__active-bar {
    display: none;
  }
`;

const Auth = ({
  signIn,
  signUp,
  isAuthenticated,
  history,
}) => {
  if (isAuthenticated) {
    history.push('/');
  }
  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs activeName="1">
          <Tabs.Pane label="Sign In" name="1">
            <SignIn signIn={signIn} />
          </Tabs.Pane>
          <Tabs.Pane label="Sign Up" name="2">
            <SignUp signUp={signUp} />
          </Tabs.Pane>
        </Tabs>
      </TabsWrapper>
    </Wrapper>
  );
};

Auth.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
Auth.defaultProps = {
  signIn: () => {},
  signUp: () => {},
  isAuthenticated: false,
  history: () => ({}),
};

export default Auth;

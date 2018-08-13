import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Route,
  // Link
} from 'react-router-dom';

import MainPage from './components/MainPage';
import AuthContainer from './containers/AuthContainer';
import PrivateRoute from './components/PrivateRoute';


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fafafa;
  flex-flow: column nowrap;
`;

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <PrivateRoute exact path="/" component={MainPage} />
      <PrivateRoute exact path="/main" component={MainPage} />
      <Route path="/auth" component={AuthContainer} />
    </Wrapper>
  </BrowserRouter>
);

export default App;

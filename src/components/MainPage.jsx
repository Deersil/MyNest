import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import DashboardContainer from '../containers/DashboardContainer';

const AppContent = styled.div`
  flex: 1 0;
  display: flex;
  flex-flow: row nowrap;
`;

const MainPage = () => (
  <React.Fragment>
    <Navbar />
    <AppContent>
      {/* <Sidebar /> */}
      <DashboardContainer />
    </AppContent>
  </React.Fragment>
);

export default MainPage;

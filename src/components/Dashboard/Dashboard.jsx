import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Topbar from './Topbar';
import HotelsList from '../HotelsList';
import Filterbar from './Filterbar';


const Content = styled.div`
  flex: 1 0;
  padding: 0 0 0 8px;
  display: flex;
  flex-flow: column nowrap;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1 0;
  padding: 7px;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: props.hotels || [],
      maxCost: 0,
      config: {
        stars: [],
      },
    };
  }
  componentDidMount() {
    this.props.initHotels();
  }
  onConfigChange = (value) => {
    const { config } = this.state;
    this.setState({
      config: {
        ...config,
        ...value,
      },
    }, () => {
      this.filterList();
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { hotels } = nextProps;
    const maxCost = Math.max(...hotels.map(item => item.cost));
    return {
      ...prevState,
      filteredList: hotels,
      maxCost,
    };
  }
  filterList = () => {
    const { hotels } = this.props;
    const { config } = this.state;
    const { cost, stars } = config;
    const filtered = hotels.filter((item) => {
      if (cost && ((item.cost < cost[0]) || (item.cost > cost[1]))) {
        return false;
      }
      if (stars.length !== 0 && stars.indexOf(item.stars) === -1) {
        return false;
      }

      return item;
    });
    this.setState({
      filteredList: filtered,
    });
  }
  render() {
    const { config, filteredList, maxCost } = this.state;
    return (
      <Wrapper>
        <Filterbar
          onChange={this.onConfigChange}
          config={config}
          maxCost={maxCost}
        />
        <Content>
          <Topbar>
            Hotels
          </Topbar>
          <HotelsList
            config={config}
            list={filteredList}
          />
        </Content>
      </Wrapper>
    );
  }
}

Dashboard.propTypes = {
  hotels: PropTypes.array, // eslint-disable-line 
  initHotels: PropTypes.func,
};

Dashboard.defaultProps = {
  hotels: [],
  initHotels: () => {},
};

export default Dashboard;

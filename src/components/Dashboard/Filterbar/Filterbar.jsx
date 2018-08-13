import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tab from './Tab';
import HotelsParams from './HotelsParams';
import PaymentTerms from './PaymentTerms';
import Services from './Services';
import Rating from './Rating';
import CostPicker from './CostPicker';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 8px;
  flex: 0 0 240px;
  background: #fff;
  border: 1px solid #eaeefb;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.1);
`;
class Filterbar extends Component {
  onChange = (value) => {
    const { config, onChange } = this.props;
    onChange({
      ...config,
      ...value,
    });
  }
  render() {
    const { maxCost } = this.props;
    return (
      <Wrapper>
        <CostPicker
          max={maxCost}
          onChange={this.onChange}
        />
        <Tab title="Hotels" opened>
          <HotelsParams
            onChange={this.onChange}
          />
        </Tab>
        <Tab title="Rating">
          <Rating
            onChange={this.onChange}
          />
        </Tab>
        <Tab title="Terms of payment">
          <PaymentTerms
            onChange={this.onChange}
          />
        </Tab>
        <Tab title="Services">
          <Services
            onChange={this.onChange}
          />
        </Tab>
      </Wrapper>
    );
  }
}
Filterbar.propTypes = {
  maxCost: PropTypes.number,
  onChange: PropTypes.func,
  config: PropTypes.object, // eslint-disable-line 
};
Filterbar.defaultProps = {
  maxCost: 100,
  onChange: () => {},
  config: {},
};

export default Filterbar;

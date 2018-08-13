import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HotelCard from './HotelCard';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -4px;
`;
const HotelsList = ({ list }) => {
  const hotels = list.map(item => (
    <HotelCard
      key={item.id}
      stars={item.stars}
      oldCost={item.oldCost}
      cost={item.cost}
      title={item.title}
      image={item.image}
    />
  ));
  return (
    <Wrapper>
      {hotels}
    </Wrapper>
  );
};

HotelsList.propTypes = {
  list: PropTypes.array, // eslint-disable-line 
};
HotelsList.defaultProps = {
  list: [],
};

export default HotelsList;

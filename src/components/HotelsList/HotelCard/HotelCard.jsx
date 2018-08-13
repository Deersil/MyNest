import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';
import CostLabel from './CostLabel';
import Actions from './Actions';
// import Button from '../../Elements/Button';

const Wrapper = styled.div`
  position: relative;
  height: 365px;
  width: 250px;
  box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.4);
  margin: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;
const Delimited = styled.hr`
  width: 100%;
  height: 0;
  border: 0.5px solid #8B8F9B;
`;

const Title = styled.h3`
  color: #fff;
  margin: 5px 0;
  font-size: 1
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  z-index: 100;
  padding: 15px;
`;
const HotelCard = ({
  title,
  image,
  stars,
  oldCost,
  cost,
}) => {
  const style = {};
  if (image) {
    style.backgroundImage = `url(${image})`;
  }
  return (
    <Wrapper style={style}>
      <Content>
        <Stars rate={stars} />
        <Delimited />
        <Title>
          {title}
        </Title>
        <CostLabel
          cost={cost}
          oldCost={oldCost}
        />
        <Actions />
      </Content>
    </Wrapper>
  );
};
HotelCard.propTypes = {
  // id: PropTypes.number.,
  title: PropTypes.string,
  image: PropTypes.string,
  stars: PropTypes.number,
  oldCost: PropTypes.number,
  cost: PropTypes.number,
};
HotelCard.defaultProps = {
  title: '',
  image: null,
  stars: 1,
  oldCost: 0,
  cost: 0,
};

export default HotelCard;

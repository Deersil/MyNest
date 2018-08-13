import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import stars from './icons/star.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
`;
const Rate = styled.span`
  margin-left: 5px;
  color: #fff;
`;


const Stars = ({ rate }) => {
  let text = `${rate} stars`;
  if (rate === 1) {
    text = `${rate} star`;
  }
  return (
    <Wrapper>
      <Icon src={stars} />
      <Rate>
        {text}
      </Rate>
    </Wrapper>
  );
};

Stars.propTypes = {
  rate: PropTypes.number,
};
Stars.defaultProps = {
  rate: 1,
};

export default Stars;

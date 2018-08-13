import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import wideToggle from '../icons/wide-toggle.svg';


const Icon = styled.img`
`;
const WideToggle = props => (
  <Icon
    src={wideToggle}
    onClick={props.onClick}
  />
);
WideToggle.defaultProps = {
  onClick: () => {},
};
WideToggle.propTypes = {
  onClick: PropTypes.func,
};

export default WideToggle;

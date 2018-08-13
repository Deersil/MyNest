import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: auto;
`;
const OldCost = styled.p`
  color: #ff4949;
  text-decoration: line-through;
  margin: 5px 0;
  font-size: 15px;
`;

const NewCost = styled.p`
  color: #20a0ff;
  font-size: 24px;
  margin: 5px 0;
`;

const CostLabel = ({ oldCost, cost }) => {
  let oldCostItem = '';
  if (oldCost) {
    oldCostItem = (<OldCost> {`${oldCost} $`}</OldCost>);
  }
  return (
    <Wrapper>
      {oldCostItem}
      <NewCost>
        {`${cost} $`}
      </NewCost>
    </Wrapper>
  );
};

CostLabel.propTypes = {
  oldCost: PropTypes.oneOfType([
    PropTypes.number,
  ]),
  cost: PropTypes.number.isRequired,
};
CostLabel.defaultProps = {
  oldCost: 0,
};

export default CostLabel;

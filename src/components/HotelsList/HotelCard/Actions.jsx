import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'element-react';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10px;
  /* margin-top: auto; */
`;

const Actions = ({ onClick }) => (
  <Wrapper>
    <Button
      type="primary"
      size="large"
      onClick={onClick}
    >
      Select
    </Button>
  </Wrapper>
);

Actions.propTypes = {
  onClick: PropTypes.func,
};
Actions.defaultProps = {
  onClick: () => {},
};

export default Actions;

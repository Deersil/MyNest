import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import arrowIcon from '../icons/down-arrow.svg';

const Actions = styled.ul`
  position: absolute;
  display: none;
  left: 0;
  right: 0;
  top: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.1);
  border: solid 1px #eaeefb;
`;
const ActionsItem = styled.li`
  text-align: center;
  cursor: pointer;
  padding: 15px 0;
  &:hover {
    background: #eaeefb;
  }
`;

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  &:hover {
    ${Actions} {
      display: block;
    }
  }
`;
const FullName = styled.p`
  margin: 0 15px;
  color: #BABCC4;
  font-size: 15px;
  font-weight: 400;
`;

const DropdownIcon = styled.img``;

const Usermenu = ({ signOut, firstName, lastName }) => (
  <Wrapper>
    <Avatar />
    <FullName>{`${firstName || ''} ${lastName || ''}`}</FullName>
    <DropdownIcon src={arrowIcon} />
    <Actions>
      <ActionsItem onClick={signOut}>
        Exit
      </ActionsItem>
    </Actions>
  </Wrapper>
);
Usermenu.propTypes = {
  signOut: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

Usermenu.defaultProps = {
  signOut: () => {},
  firstName: '',
  lastName: '',
};

export default Usermenu;

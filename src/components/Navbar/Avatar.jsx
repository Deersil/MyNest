import React from 'react';
import styled from 'styled-components';
import defaultAvatar from '../icons/usermenu.svg';

const Image = styled.img`
  margin-left: auto;
  width: 32px;
  height: 32px;
`;
const Avatar = () => (<Image src={defaultAvatar} />);

export default Avatar;

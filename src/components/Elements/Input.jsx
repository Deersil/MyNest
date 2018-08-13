import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  color: #1f2d3d;
  font-size: 16px;
  height: 42px;
  padding: 3px 10px;
  &:focus {
    border-color: #20a0ff;
  }
`;

export default Input;

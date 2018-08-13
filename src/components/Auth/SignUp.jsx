import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'element-react';
import { Input } from '../Elements';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 25px;
`;
const Field = styled.div`
  margin-bottom: 15px;
  .el-input {
    margin-top: 5px;
  }
  ${Input} {
    margin-top: 2px;
  }
`;
const Label = styled.label`
  font-weight: normal;
  font-size: 16px;
`;

const Actions = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: column nowrap;
`;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.signUp();
    }
  }
  handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  signUp() {
    const {
      username,
      email,
      firstName,
      lastName,
      password,
    } = this.state;

    this.props.signUp({
      username,
      email,
      firstName,
      lastName,
      password,
    });
  }
  render() {
    return (
      <Wrapper>
        <Field>
          <Label>Username</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Username"
            name="username"
            size="large"
          />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Email"
            name="email"
            size="large"
          />
        </Field>
        <Field>
          <Label>First name</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="First name"
            name="firstName"
            size="large"
          />
        </Field>
        <Field>
          <Label>Last name</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Last name"
            name="lastName"
            size="large"
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Password"
            name="password"
            type="password"
            size="large"
          />
        </Field>
        <Actions>
          <Button
            onClick={this.signUp}
            onKeyPress={this.handleKeyPress}
            type="primary"
            size="large"
          >
            Sign Up
          </Button>
        </Actions>
      </Wrapper>
    );
  }
}
SignUp.propTypes = {
  signUp: PropTypes.func,
};

SignUp.defaultProps = {
  signUp: () => {},
};


export default SignUp;

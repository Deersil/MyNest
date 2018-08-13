import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'element-react';
import PropTypes from 'prop-types';
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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.login();
    }
  }
  handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  login() {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn({
      email,
      password,
    });
  }
  render() {
    return (
      <Wrapper>
        <Field>
          <Label>Email</Label>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            name="email"
            type="email"
            placeholder="Email"
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
            type="primary"
            size="large"
            onClick={this.login}
          >
            Sign In
          </Button>
        </Actions>
      </Wrapper>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func,
};
SignIn.defaultProps = {
  signIn: () => {},
};

export default SignIn;

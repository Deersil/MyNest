import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Checkbox } from 'element-react';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  .el-checkbox {
    margin: 5px 0;
  }
  .el-checkbox__label {
    margin-left: 5px;
    font-size: 16px;
  }
`;

class PaymentTerms extends Component {
  static defaultProps = {
    value: [],
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || [],
    };
  }
  addItem(key, val) {
    const { value } = this.state;
    if (val && value.indexOf(key) === -1) {
      this.setState({
        value: [...value, key],
      });
    } else {
      this.setState({
        value: value.filter(item => item !== key),
      });
    }
  }
  render() {
    return (
      <Wrapper>
        <Checkbox>
          Payment Now
        </Checkbox>
        <Checkbox>
          Payment at the hotel
        </Checkbox>
      </Wrapper>
    );
  }
}
PaymentTerms.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
};
export default PaymentTerms;

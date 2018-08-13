import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch } from 'element-react';
// import Toggler from '../Elements/Toggler';

const Wrapper = styled.div`
  margin: 5px 0 0 0;
  width: 100%;
`;

const Header = styled.div`
  background: #f9fafc;
  display: flex;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  position: relative;
  padding: 0 15px;
  justify-content: space-between;
  border: 1px solid #eaeefb;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #8B8F9B;
  text-transform: uppercase;
`;

const Body = styled.div`
  padding: 15px 17px;
`;

const Badge = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #8B8F9B;
`;

class Tab extends Component {
  static defaultProps = {
    title: '',
    opened: false,
    badge: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(value) {
    this.setState({
      opened: value || false,
    });
  }
  render() {
    const { children, badge } = this.props;
    const { opened } = this.state;
    let body;
    let badgeBlock;
    if (badge) {
      badgeBlock = (
        <Badge>
          { badge }
        </Badge>
      );
    }
    if (opened) {
      body = (
        <Body>
          { children }
        </Body>
      );
    }
    return (
      <Wrapper>
        <Header>
          <Title>
            { this.props.title }
          </Title>
          {badgeBlock}
          <Switch
            value={opened}
            onText=""
            offText=""
            onChange={this.toggle}
          />
        </Header>
        { body }
      </Wrapper>
    );
  }
}
Tab.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  badge: PropTypes.string,
  opened: PropTypes.bool,
};
// const Searchbar = () => (<Wrapper />);

export default Tab;

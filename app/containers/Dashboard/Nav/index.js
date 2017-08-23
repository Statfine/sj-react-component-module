import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const Container = styled.div`
  width:180px;
  overflow-y: auto;
  position:fixed;
  height:100%;
  background:white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
  z-index:500;
  color:#364149;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const Section = styled.div`
`;

const P = styled.div`
  height:48px;
  padding: 0 20px;
  line-height:48px;
  background:${({ selected }) => selected ? '#e9eef1' : 'unset'};
  border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #fff solid'};
  cursor:pointer;
  & svg {
    margin-right:10px;
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'} !important;
  }
  & div {
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'};
  }
  &:hover {
    background: #e9eef1;
    border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #e9eef1 solid'};
  }
`;

export default class Nav extends PureComponent {

  render() {
    const { location } = this.props;
    return (
      <Container >
        <div style={{ flex: 1 }}>
          <Section>
            <P
              selected={location.pathname === '/'}
              onClick={() => browserHistory.push('/')}
            >
              <div>Home</div>
            </P>
            <P
              selected={location.pathname === '/input'}
              onClick={() => browserHistory.push('/input')}
            >
              <div>Input</div>
            </P>
          </Section>
        </div>
      </Container>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object,
};

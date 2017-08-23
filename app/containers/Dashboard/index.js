import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Container = styled.div`
  padding: 30px 30px 30px 210px;
`;

class Dashboard extends PureComponent {

  render() {
    const { children, location } = this.props;

    return (
      <div>
        <Nav location={location} />
        <Container>
          {children}
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Dashboard;

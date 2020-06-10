import React from 'react';
import Background from '../../components/Background';
import {Grid, Row, Col } from '../../components/Grid';
import Logo from '../../components/Logo';
import Info from '../../components/Info';

function Campfire() {
  return (
    <Background>
      <Grid>
        <Row>
          <Col size={1}>
            <Info/>
          </Col>
          <Col size={1}>
              second
          </Col>
          <Col size={0}>
          third
          </Col>
        </Row>
      </Grid>
    </Background>
  );
}

export default Campfire;

import React from 'react';
import { Grid, Row, Col } from '../Grid';
import { Card, CardInfos, SessionSearch, Title } from './styles'

function RightSideBar() {
  return (
    <Card>
      <CardInfos>
        <Grid>
          <Row>
            <Title>Mesas</Title>
          </Row>
          <Row>
            <Col size={1}>
              <SessionSearch placeholder="procure uma mesa para jogar!" />
            </Col>
          </Row>
        </Grid>
      </CardInfos>
    </Card>
  );
}
export default RightSideBar;

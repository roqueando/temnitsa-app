import React from 'react';
import {Card, CardInfos, ProfileAvatar, ProfileName} from './styles';
import UserAvatar from 'react-user-avatar';
import {Grid, Row, Col} from '../Grid';

function Info() {
  return (
    <Card>
      <CardInfos>
        <Grid>
          <Row>
          <Col size={1}>
            <UserAvatar size="48" name="player" src="https://avatarfiles.alphacoders.com/124/124317.jpg" />
          </Col>
          <Col size={1}>
            <ProfileName>
              Player
            </ProfileName>
          </Col>
          </Row>
        </Grid>
      </CardInfos>
    </Card>
  );
}

export default Info;

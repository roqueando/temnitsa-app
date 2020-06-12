import React from 'react';
import {Card, CardInfos, ProfileName, Tier, Roleplay, LogoutButton} from './styles';
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
          <Row>
            <Col size={2}>
              <Tier tier={2}>
                III
              </Tier>
            </Col>
            <Col size={4}>
              <Roleplay>old school</Roleplay>
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              <LogoutButton>
                exit
              </LogoutButton>
            </Col>
          </Row>
        </Grid>
      </CardInfos>
    </Card>
  );
}

export default Info;

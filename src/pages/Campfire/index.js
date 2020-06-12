import React from 'react';
import {useSelector} from 'react-redux';

//Components
import Background from '../../components/Background';
import {Grid, Row, Col } from '../../components/Grid';
import Info from '../../components/Info';
import LeftSideBar from '../../components/LeftSideBar';
import BottomSideBar from '../../components/BottomSideBar';
import RightSideBar from '../../components/RightSideBar';
import Chat from '../../components/Chat';

//Animations
import SlideFromLeft from '../../animations/SlideFromLeft';
import SlideFromBottom from '../../animations/SlideFromBottom';
import SlideFromRight from '../../animations/SlideFromRight';

function Campfire() {
  const campfire = useSelector(state => state.campfire);
  return (
    <Background>
      <Grid>
        <Row>
          <Col size={1}>
            <SlideFromLeft duration="0.5s" delay="0.5s">
              <Info/>
              <LeftSideBar/>
            </SlideFromLeft>
          </Col>
          <Col size={1}>
              <Chat status={campfire.chatToggled}/>

              <SlideFromBottom duration="0.5s" delay="0.5s">
                <BottomSideBar/>
              </SlideFromBottom>
          </Col>
          <Col size={0}>
            <SlideFromRight duration="0.5s" delay="0.5s">
              <RightSideBar />
            </SlideFromRight>
          </Col>
        </Row>
      </Grid>
    </Background>
  );
}

export default Campfire;

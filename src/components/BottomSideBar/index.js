import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Grid, Row, Col } from '../../components/Grid';
import {
  CardBottom,
  CardBottomInfo,
  statusColors,
  AudioControlButtons,
  ChatButtonToggle
} from './styles';
import {
  BsCircle,
  BsFillMicFill,
  BsFillVolumeUpFill,
  BsArrowUpShort
} from 'react-icons/bs';
import {Types as CampfireTypes} from '../../store/ducks/campfire';

const StatusInfo = ({status}) => (
  <div style={{display: 'flex', marginTop: '3%', marginLeft: '3%', fontFamily:'Roboto', fontWeight: 100}}>
    <span>
      <BsCircle color={statusColors[status]} />
    </span>
    <span style={{ color: statusColors[status]  }}>{status === 'afk' ? 'ausente' : status} </span>
  </div>
)


function BottomSideBar() {
  const {chatToggled} = useSelector(state => state.campfire);
  const dispatch = useDispatch();
  console.log(chatToggled);
  return (
    <CardBottom>
      <CardBottomInfo>
        <Grid>
          <Row>
            <Col size={1}>
             <StatusInfo status='online'/>
            </Col>
            <Col size={1}>
            <ChatButtonToggle
              onClick={() => dispatch({type: CampfireTypes.CHAT_TOGGLE, payload: !chatToggled})}
            >
              <BsArrowUpShort color="white" size={20} />
            </ChatButtonToggle>
            </Col>
              <Col size={0.5}>
              <AudioControlButtons>
                <BsFillVolumeUpFill color="white" size={15}/>
              </AudioControlButtons>
              <AudioControlButtons>
                <BsFillMicFill color="white" size={15} />
              </AudioControlButtons>
              </Col>
          </Row>
        </Grid>
      </CardBottomInfo>
    </CardBottom>
  );
}

export default BottomSideBar;

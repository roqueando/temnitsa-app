import React from 'react';
import {Card, CardInfos, BarButtons} from './styles';
import ReactTooltip from 'react-tooltip';
import {
  BsFilePlus,
  BsMap,
  BsFillPersonLinesFill,
  BsFillShieldFill,
  BsBagFill,
  BsFillLightningFill
} from 'react-icons/bs';

const LeftBarButton = ({name, icon}) => (
  <BarButtons data-tip={name}>
    {icon}
    <ReactTooltip
      place="right"
      effect="solid"
      backgroundColor="#3A2C3A"
      arrowColor="transparent"
      delayShow={3}
      delayHide={3}
    />
  </BarButtons>
)

function LeftSideBar() {
  return (
    <Card>
      <CardInfos>
        <LeftBarButton name='fichas' icon={<BsFilePlus color="white" size={20}/>}/>
        <LeftBarButton name='mapas' icon={<BsMap color="white" size={20}/>}/>
        <LeftBarButton name='npcs' icon={<BsFillPersonLinesFill color="white" size={20}/>}/>
        <LeftBarButton name='monstros' icon={<BsFillShieldFill color="white" size={20}/>}/>
        <LeftBarButton name='items/loots' icon={<BsBagFill color="white" size={20}/>}/>
        <LeftBarButton name='ideas' icon={<BsFillLightningFill color="white" size={20} />}/>
      </CardInfos>
    </Card>
  );
}

export default LeftSideBar;

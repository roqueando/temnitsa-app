import styled, {keyframes} from 'styled-components';
import AnimatedComponent from '../components/AnimatedComponent';

const SlideFromLeftAnimation = keyframes`
  from {margin-left: -100px;}
  to {margin-left: 190px;}
`

const SlideFromLeft = styled(AnimatedComponent)`
  animation-name: ${SlideFromLeftAnimation};
`

export default SlideFromLeft;

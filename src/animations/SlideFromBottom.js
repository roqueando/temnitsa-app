import styled, {keyframes} from 'styled-components';
import AnimatedComponent from '../components/AnimatedComponent';

const SlideFromBottomAnimation = keyframes`
  from {bottom: -100px;}
  to {bottom: -20;}
`

const SlideFromBottom = styled(AnimatedComponent)`
  animation-name: ${SlideFromBottomAnimation};
`

export default SlideFromBottom;

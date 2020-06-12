import styled, {keyframes} from 'styled-components';
import AnimatedComponent from '../components/AnimatedComponent';

const SlideFromRightAnimation = keyframes`
  from {margin-right: -300px;}
  to {margin-right: -10px;}
`

const SlideFromRight = styled(AnimatedComponent)`
  animation-name: ${SlideFromRightAnimation};
`

export default SlideFromRight;

import styled, {keyframes} from 'styled-components';
import AnimatedComponent from '../components/AnimatedComponent';

const FadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

const FadeIn = styled(AnimatedComponent)`
  animation-name: ${FadeInAnimation};
`

export default FadeIn;

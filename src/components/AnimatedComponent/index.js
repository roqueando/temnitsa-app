import styled from 'styled-components';

const AnimatedComponent = styled.div`
    animation-duration: ${props => props.duration};
    animation-timing-function: ${props => props.timingFunction};
    animation-delay: ${props => props.delay};
    animation-iteration-count: ${props => props.iterationCount};
    animation-direction: ${props => props.direction};
    animation-fill-mode: ${props => props.fillMode};
    animation-play-state:  ${props => props.playState};
    display: ${props => props.display};
`;

AnimatedComponent.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'block'
};

export default AnimatedComponent;

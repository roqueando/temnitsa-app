import styled from 'styled-components';

export const CardBottom = styled.div`
  background-color: #403B50;
  position: fixed;
  bottom: -35px;
  left: 348px;
  width: 50%;
  height: 70px;
  border-radius: 10px;
`;

export const CardBottomInfo = styled.div`
  padding: 5px;
`

export const statusColors = {
  online: '#6BF178',
  offline: '#848586',
  afk: '#C49991'
}

export const AudioControlButtons = styled.button`
  border: 1px solid #3A2C3A;
  border-radius: 5px;
  width: 30%;
  height: 100%;
  background-color: transparent;
  margin-left: 10%;
  padding: 5px;
  cursor: pointer;
`

export const ChatButtonToggle = styled.button`
  border: none;
  border-radius: 5px;
  width: 20%;
  height: 30px;
  background-color: #3a2c3a;
  margin-left: 15%;
  padding: 5px;
  cursor: pointer;
`

import styled from 'styled-components';

export const Card = styled.div`
  background-color: #403B50;
  margin-top: 5%;
  margin-left: -200px;
  width 200px;
  height: 155px;
  border-radius: 10px;
`;

export const CardInfos = styled.div`
  margin-top: 5%;
  margin-left: 10px;
  padding: 10px;
`

export const ProfileName = styled.span`
  text-align: center;
  margin-top: 15%;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  color: #eee;
  font-family: 'Roboto';
  font-weight: 100;
`;

const tierColors = {
  1: '#8CC084',
  2: '#5CF7FF',
  3: '#331e38',
  4: '#FEA82F',
  5: '#89043D'
}

export const Tier = styled.div`
  text-align: center;
  margin-top: 15%;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  color: ${props => tierColors[props.tier]};
  border-bottom: 1px solid ${props => tierColors[props.tier]};
  border-radius: 5px;
  padding: 5px;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const Roleplay = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  color: #eee;
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  padding: 5px;
  font-family: 'Roboto';
  font-weight: 100;
  letter-spacing: 1px;
`

export const LogoutButton = styled.div`
  border-radius: 5px;
  margin-top: 5%;
  margin-left: 8%;
  margin-right: auto;
  display: block;
  padding: 4px;
  width: 70%;
  border:1px solid #9b59b6;
  background-color: transparent;
  color: #eee;
  font-family: 'Roboto';
  font-weight: thin;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 100;
  letter-spacing: 1px;
`;

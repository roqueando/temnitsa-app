import styled from 'styled-components';

export const Background = styled.div`
  background-image: url('campfiregif.gif');
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const FormBox = styled.div`
  width: 100%;
  height: 650px;
  padding-left: 9%;
  padding-top: 15%;
  background-color: #403B50;
  font-family: 'Roboto';
`;

export const InputBox = styled.div`
  position: absolute;
  width: 25%;
  top: 220px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: auto;
  display: block;
  padding: 10px;
  width: 50%;
  background-color: #2E2A39;
  color: #fff;
  font-family: 'Roboto';
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin-top: 5%;
  margin-left: 8%;
  margin-right: auto;
  display: block;
  padding: 10px;
  width: 70%;
  background-color: #2E2A39;
  color: #999;
  font-family: 'Roboto';
  font-weight: thin;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;

export const Divider = styled.p`
  color: #999;
  margin-left: 40%;
  margin-right: auto;
  display: block;
`


import React, { useState } from 'react';
import {
  Background,
  FormBox,
  Input,
  InputBox,
  Button,
  Divider
} from './styles';
import {Grid, Row, Col } from '../../components/Grid';
import Logo from '../../components/Logo';
//import api from '../../services/api';
import {fakeLogin} from '../../services/auth';
import {useHistory} from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const enter = async user => {
    fakeLogin();

    history.push('/campfire');
  }
  return (
    <Grid style={{ overflow: 'hidden'  }}>
      <Row>
        <Col size={3} collapse='xs'>
          <Background/>
        </Col>
          <Col size={1}>
            <FormBox>
              <Logo position='centered' margin={50}/>
              <InputBox>
              <Input
                placeholder="email"
                onChange={(event) => setUser({...user, email: event.target.value})}
              />
              <Input
                placeholder="password"
                type="password" onChange={(event) => setUser({...user, password: event.target.value})}
              />
                <Button onClick={() => enter(user)}>enter</Button>
                <Divider>or</Divider>
                  <Button>create account</Button>
              </InputBox>
            </FormBox>
          </Col>
      </Row>
    </Grid>
  );
}

export default Login;

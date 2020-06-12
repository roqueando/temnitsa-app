import React from 'react';
import {CardChat} from  './styles';

function Chat({status}) {
  return (
    <CardChat style={{
      display: status === true ? 'block' : 'none'
      }}>
    </CardChat>
  );
}

export default Chat;

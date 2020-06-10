import React from 'react';

function Logo({position, margin}) {
  const margins = {
    marginTop: margin
  }
  const centered = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    ...margins
  }
  return (
    <img src={"logo-withou-bg.svg"} alt="Temnitsa" style={position === 'centered' ? centered : {}}/>
  );
}

export default Logo;

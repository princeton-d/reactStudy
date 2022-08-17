import React from 'react';

const RcpList = (props) => (
  <li>
    <div>
      <h2>{props.resip.RCP_NM}</h2>
      <img src={props.resip.ATT_FILE_NO_MAIN} alt='img' />
      <h3>{props.resip.RCP_PARTS_DTLS}</h3>
      <br />
    </div>
  </li>
);

export default RcpList;

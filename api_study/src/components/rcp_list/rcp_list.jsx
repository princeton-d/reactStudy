import React from 'react';

const RcpList = (props) => (
  <li>
    <div>
      <img src={props.resip.ATT_FILE_NO_MAIN} alt='img' />
      <p>{props.resip.RCP_NM}</p>
    </div>
  </li>
);

export default RcpList;

import { useEffect, useState } from 'react';
import './App.css';
import RcpList from './components/rcp_list/rcp_list';

function App() {
  const [rcp, setRcp] = useState([]);
  useEffect(() => {
    fetch(
      'http://openapi.foodsafetykorea.go.kr/api/270e88abbdc241d4a5b7/COOKRCP01/json/1/10'
    )
      .then((response) => response.json())
      .then((result) => setRcp(result.COOKRCP01.row))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <ul>
      {rcp.map((resip) => (
        <RcpList resip={resip} key={resip.RCP_NM} />
      ))}
    </ul>
  );
}
export default App;

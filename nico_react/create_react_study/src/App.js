import Button from "./Button";
import styles from './App.module.css'
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue(prev => prev + 1)
  const onChange = () => { }
  console.log('i run all the time')
  useEffect(() => {
    console.log('CALL THE API...')
  }, [])
  return <>
    <div>
      <input onChange={onChange} type='text' placeholder='Search here...' />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={counter} />
      <button onClick={onClick}>{counter}</button>
    </div>
  </>
}

export default App;
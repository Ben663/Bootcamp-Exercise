// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://loacalhost:6000/api/weather');
        setWeather(data);
      } catch (error) {
        setWeather(error)
      }
    }
    fetchData();
  }, []);
  return <div>{weather}</div>;
}

export default App;

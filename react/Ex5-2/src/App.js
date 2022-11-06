import React from 'react';
import './App.css';
import Card from './Card';
import imges from './img/one.jpg'
import imges1 from './img/two.jpg'
import imges2 from './img/tree.jpg'


function App() {
  return (
    <div className='first'>
      <Card title='hello world' description='good day' photo={imges}/>
      <Card title='hello world' description='fun day' photo={imges1}/>
      <Card title='hello world' description='happy day' photo={imges2}/>
    </div>
  );
}

export default App;

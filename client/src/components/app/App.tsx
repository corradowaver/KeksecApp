import React from 'react';
import Navbar from '../navbar/Navbar';
import Mainview from '../Mainview/Mainview'
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Mainview></Mainview>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from '../navbar/Navbar';
import Mainview from '../mainview/Mainview'
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Mainview/>
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';


//Imports Components
import NavBar from './components/NavBar';
import MainScreen from './components/MainScreen';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <div className="page-background">
        <MainScreen />
      </div>

    </GlobalProvider>
  );
}

export default App;

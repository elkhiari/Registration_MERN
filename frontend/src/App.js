import logo from './logo.svg';
import './App.css';
import ProgRess from './components/progress';
import Inscription from './components/inscription';
import React, { useState } from 'react';

export const UserContext = React.createContext()

function App() {

  const [user,setUser] = useState() 

  return (
  <UserContext.Provider value={{user,setUser}} >
      <ProgRess />
      <Inscription />
  </UserContext.Provider>
  );
}

export default App;

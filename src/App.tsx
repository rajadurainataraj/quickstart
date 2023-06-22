import React from 'react';
import './App.css';

import AuthRoutes from './modules/auth/AuthRoutes';
function App() {

  const host = window.location.host.split(".");

  if (host.length <= 3 && host[0] === "accounts") {
 
    return (
     <AuthRoutes/>
    )
  } 

  return <></>
}

export default App;

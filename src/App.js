import React from 'react';
import { HashRouter } from "react-router-dom"

import Header from "./components/Header/Header"
import router from "./router"
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Header />
      {router}
    </HashRouter>
  );
}

export default App;

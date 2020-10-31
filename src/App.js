import React, { useEffect } from 'react';
import './App.css';
import './style/main.scss';


import Header from './components/header';
import Home from './components/pages/home/Home';

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      smoothMobile: true,

    });
  });


  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import './style/main.scss';


import Header from './components/header';
import Home from './components/pages/home/Home';
import Loadscreen from './components/loadscreen/loadscreen';

import LocomotiveScroll from 'locomotive-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

import { TimelineMax, TweenMax, Power2 } from "gsap";



function App() {

  const [loading, setLoading] = useState(true);

  const animate = TweenMax.to(Loadscreen, 2, { ease: Power2.easeInOut, repeat: -1, yoyo: true })


  useEffect(() => {

    // new LocomotiveScroll({
    //   el: document.querySelector(".App"),
    //   smooth: true,
    //   smoothMobile: true,
    //   lerp: 0.1,
    //   // multiplier: 2,
    // });

    setTimeout(() => setLoading(false), 3000, animate);




  }, [])


  return (

    <ParallaxProvider>
      {loading === false ? (
        <div className="App">
          <Header />
          <Home />
        </div>
      ) : (
          <Loadscreen />
        )}
    </ParallaxProvider>

  );
}

export default App;
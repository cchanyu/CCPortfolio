import React, { useEffect } from 'react';
import '../css/Home.scss';
import Spline from '@splinetool/react-spline';

const Home = () => {
  useEffect(() => {
    return () => {
      const splineElement = document.querySelector('.home .SplineSceneContainer');
      if (splineElement) {
        splineElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="home">
      <Spline scene="https://prod.spline.design/iSTpEEfVMef0QNyF/scene.splinecode" />
    </div>
  );
}

export default Home;
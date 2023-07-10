import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './App.css';

function App() {
  const animatedBackgroundRef = useRef(null);

  useEffect(() => {
    const colors = ['#f5f5f5', '#ffffff'];
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.to(animatedBackgroundRef.current, {
      duration: 5,
      ease: 'power1.inOut',
      background: `radial-gradient(circle at center, ${colors[0]}, ${colors[1]})`,
      repeatRefresh: true,
      repeat: -1,
      yoyo: true,
      onRepeat: function () {
        colors.reverse();
      },
    });

    // Clean up the animation when the component unmounts
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="app">
      <div className="animated-background" ref={animatedBackgroundRef}>Coming August 2023</div>
    </div>
  );
}

export default App;

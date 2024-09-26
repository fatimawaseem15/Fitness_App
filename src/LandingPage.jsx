import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const textSectionRef = useRef(null);
  const fadeInSectionRef = useRef(null);

  useEffect(() => {
    // Box animation
    gsap.fromTo(boxRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 2 });

    // Circle animation
    gsap.fromTo(circleRef.current, { scale: 0 }, { scale: 1, duration: 2, delay: 1, ease: 'elastic.out(1, 0.5)' });

    // Text section animation
    gsap.fromTo(textSectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, delay: 2 });

    // Fade in animation for another section
    gsap.fromTo(fadeInSectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 3 });
  }, []);

  return (
    <div className="App">
      <h1>GSAP Animations with Multiple Sections</h1>
      {/* Box Section */}
      <div ref={boxRef} className="box">Animate Me</div>

      {/* Circle Section */}
      <div ref={circleRef} className="circle">Circle</div>

      {/* Text Section */}
      <div ref={textSectionRef} className="text-section">
        <p>This is a text section that slides in from below.</p>
      </div>

      {/* Fade In Section */}
      <div ref={fadeInSectionRef} className="fade-in-section">
        <p>This section fades in slowly.</p>
      </div>
    </div>
  );
}

export default App;

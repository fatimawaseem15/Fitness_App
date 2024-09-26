import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const heroTextRef = useRef(null);
  const benefitRefs = useRef([]);
  const workoutRefs = useRef([]);

  useEffect(() => {
    // Hero Text Animation
    gsap.fromTo(heroTextRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2 });

    // Benefits Animation
    benefitRefs.current.forEach((el, index) => {
      gsap.fromTo(el, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: index * 0.3 });
    });

    // Workout Cards Animation
    workoutRefs.current.forEach((el, index) => {
      gsap.fromTo(el, { opacity: 0, rotateY: 90 }, { opacity: 1, rotateY: 0, duration: 1, delay: index * 0.3 });
    });
  }, []);

  return (

    <div className="App">
      <Navbar /> 
      {/* Hero Section */}
      <section className="hero">
        <h1 ref={heroTextRef}>Get Fit. Stay Healthy. Feel Great!</h1>
        <button className="cta-button">Join Now</button>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits of Fitness</h2>
        <div className="benefits-list">
          {['Improves Mood', 'Boosts Energy', 'Promotes Better Sleep', 'Helps Manage Weight'].map((benefit, i) => (
            <div key={i} ref={el => benefitRefs.current[i] = el} className="benefit-item">
              <div className="icon">💪</div>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workout Section */}
      <section className="workouts">
        <h2>Workouts to Try</h2>
        <div className="workout-cards">
          {['Yoga', 'Cardio', 'Strength Training', 'HIIT'].map((workout, i) => (
            <div key={i} ref={el => workoutRefs.current[i] = el} className="workout-card">
              <h3>{workout}</h3>
              <p>Try our {workout} routines to get in shape.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

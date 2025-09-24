"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';


export default function RevealOnScroll({ children, className = "" }) {

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.active : ''} ${className}`}
    >
      {children}
    </div>
  );
};
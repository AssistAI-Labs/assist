import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 40, callback }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (callback) {
      callback();
    }
  }, [index, text, speed, callback]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

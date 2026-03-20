import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const useKonamiCode = () => {
  const [input, setInput] = useState([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key].slice(-10);
      setInput(newInput);

      if (newInput.join(',') === konamiCode.join(',')) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F5D4', '#7B2FBE', '#ffffff']
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);
};

export default useKonamiCode;

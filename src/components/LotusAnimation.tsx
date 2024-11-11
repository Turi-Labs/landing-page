import { useEffect } from 'react';

const LotusAnimation = () => {
  useEffect(() => {
    // Create lotus container
    const lotusContainer = document.createElement('div');
    lotusContainer.className = 'lotus-container';
    document.body.appendChild(lotusContainer);

    // Create lotus elements
    const createLotus = () => {
      const lotus = document.createElement('div');
      lotus.className = 'lotus';
      lotus.style.left = `${Math.random() * 100}vw`;
      lotus.style.animationDuration = `${Math.random() * 20 + 10}s`;
      lotus.style.opacity = (Math.random() * 0.2 + 0.8).toString();
      lotus.style.transform = `scale(${Math.random() * 0.3 + 0.7})`;
      lotusContainer.appendChild(lotus);

      // Remove lotus after animation
      lotus.addEventListener('animationend', () => lotus.remove());
    };

    // Create initial lotus flowers
    Array.from({ length: 5 }).forEach(() => createLotus());

    // Continuously add new lotus flowers
    const interval = setInterval(createLotus, 2000);

    // Cleanup
    return () => {
      clearInterval(interval);
      lotusContainer.remove();
    };
  }, []);

  return null;
};

export default LotusAnimation;

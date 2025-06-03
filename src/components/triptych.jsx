import { useState  } from 'react';
import '../assets/triptych.css'

const imageSets = [
  [
    'CANDELAJPEG_1.3.1(1).webp',
    'CANDELAJPEG_1.6.1.webp',
    'CANDELAJPEG_1.5.1.webp'
  ],
  [
    'CANDELAJPEG_1.12.1(1).webp',
    'CANDELAJPEG_1.2.1.webp',
    'CANDELAJPEG_1.7.1(1).webp'
  ]
];

function Triptych() {
  const [currentSet, setCurrentSet] = useState(0);
  const [animKey, setAnimKey] = useState(0); // Used to force animation re-run

  const handleAnimationEnd = () => {
    const nextSet = (currentSet + 1) % imageSets.length;
    setCurrentSet(nextSet);

    // Wait for React to finish rendering before restarting animation
    requestAnimationFrame(() => {
      setAnimKey((prev) => prev + 1); // This forces the CSS animation to restart
    });
  };

  return (
    <div className="triptych-container">
      <img
        key={`${animKey}-0`}
        src={`/gallery-optimized/${imageSets[currentSet][0]}`}
        alt=""
        className="move-up"
      />
      <img
        key={`${animKey}-1`}
        src={`/gallery-optimized/${imageSets[currentSet][1]}`}
        alt=""
        className="move-down"
        onAnimationEnd={handleAnimationEnd}
      />
      <img
        key={`${animKey}-2`}
        src={`/gallery-optimized/${imageSets[currentSet][2]}`}
        alt=""
        className="move-up"
      />
    </div>
  )
}

export default Triptych;
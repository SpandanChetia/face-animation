import React, { useEffect } from 'react';
import './Face.scss';

const Face: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + 180;
        (eye as HTMLElement).style.transform = `rotate(${rot}deg)`;
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="face">
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
      <div className="nose"></div>
      <div className="mouth"></div>
    </div>
  );
};

export default Face;

import { useState } from "react";
import IRIS from '../../../assets/img/IRIS.webp';

const ContainersImage = ({ src, alt, className = '' }) => {
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const handleLoadImg = (e) => {
    e.target.style.animation = 'none';
  };

  const handleErrorImg = (e) => {
    if (numberOfErrors === 0) {
      setNumberOfErrors(1);
      e.target.src = IRIS;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`section__img ${className}`}
      loading="lazy"
      onLoad={handleLoadImg}
      onError={handleErrorImg}
      width="256"
      height="256"
    />
  );
};

export default ContainersImage;
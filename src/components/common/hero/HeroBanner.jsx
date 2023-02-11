import IRIS from '../../../assets/img/IRIS.webp';

const HeroBanner = ({ image, title }) => {
  return (
    <section
      className="hero d-flex a-items-center min-h-30vh"
      style={{
        backgroundImage: `url(${image ? image : IRIS})`
      }}
    >
      <div className="container">
        <h1 className="hero__title">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;
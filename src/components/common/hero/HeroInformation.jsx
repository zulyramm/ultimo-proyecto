import ContainersImage from "../containers/ContainersImage";

const HeroInformation = ({ subtitle, text, image, imageClasses = '' }) => {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column gap-sm">
        <h2 className="section__subtitle">{subtitle}</h2>
        <p className="section__text">{text}</p>
        <ContainersImage
          src={image}
          alt={subtitle}
          className={`section__img--hero mx-auto ${imageClasses}`}
        />
      </div>
    </section>
  );
}

export default HeroInformation;
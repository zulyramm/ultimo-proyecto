import { BsBullseye, BsGraphUp } from "react-icons/bs";

const AboutUsData = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <section className="section">
      <div className="container d-flex f-direction-column gap-sm">
        <h3 className="section__title section__title--xs">{attributes?.slogan}</h3>
        <p className="section__text">{attributes?.que}</p>
        <div className="g-elements g-elements--responsive-2 gap-md">
          <div className="card card--informative">
            <div className="card__body">
              <h2 className="section__title section__title--xs"><BsBullseye /> Misión</h2>
              <p className="section__text">{attributes?.mision}</p>
            </div>
          </div>
          <div className="card card--informative">
            <div className="card__body">
              <h2 className="section__title section__title--xs"><BsGraphUp /> Visión</h2>
              <p className="section__text">{attributes?.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsData;
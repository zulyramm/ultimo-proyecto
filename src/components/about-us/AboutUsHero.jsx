import HeroBanner from "../common/hero/HeroBanner";
import HeroInformation from "../common/hero/HeroInformation";

const AboutUsHero = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    
    <>
    
      <HeroBanner
   
        title="Nosotros"
      />
      
      <h2 className="card__title card__title--2xl color-dark-primary center">Iridiscent

       </h2>

       <img src="https://res.cloudinary.com/dnfmidchk/image/upload/v1676097838/IRIDISCENT_8f8056515a.png?updated_at=2023-02-11T08:21:44.685Z" alt="" />
    </>
  );
};

export default AboutUsHero;
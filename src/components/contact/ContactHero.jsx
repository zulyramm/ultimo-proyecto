import HeroBanner from "../common/hero/HeroBanner";
import HeroInformation from "../common/hero/HeroInformation";

const ContactHero = ({ contactData }) => {
  const { attributes } = contactData;

  return (
    <>
      <HeroBanner
        image={attributes?.imagen.data.attributes.formats.large.url}
        title={attributes?.titulo}
      />
      <HeroInformation
        subtitle={attributes?.titulo}
        //text={attributes?.hero.descripcion}
        
        image={attributes?.imagen.data[0].attributes.url}
      />
    </>
  );
};

export default ContactHero;
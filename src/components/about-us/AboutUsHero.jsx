import HeroBanner from "../common/hero/HeroBanner";
import HeroInformation from "../common/hero/HeroInformation";

const AboutUsHero = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <>
      <HeroBanner
        image={attributes?.foto.data[0].attributes.formats.large.url}
        title="Nosotros"
      />
      <HeroInformation
        subtitle={attributes?.nombre_empresa}
        text={attributes?.quien}
        image={attributes?.logo.data.attributes.url}
        imageClasses={'card card--informative'}
      />
    </>
  );
};

export default AboutUsHero;
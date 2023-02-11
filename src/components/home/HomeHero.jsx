import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { peruvianCurrencyFormat } from '../../utils/utils';

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag='section'
      wrapperTag='div'
      className='min-h-100vh'
      modules={[A11y, Autoplay, Navigation, Pagination]}
      loop
      navigation
      pagination={{ clickable: true }}
      preloadImages={false}
    >
      {heroProducts.map((element) => {
        const { nombrePortada, imagen,slug } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag='section'
            className='hero d-flex a-items-center min-h-100vh'
            style={{
              backgroundImage: `url(${imagen.data[0].attributes.url})`
            }}
          >
            <div className="container container--5xl w-100">
              <div className="card card--hero">
                <div className="card__body card__body--hero">
                  {/* <h2 className="card__title card__title--2xl color-dark-primary">{nombrePortada}</h2> */}
                  
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;
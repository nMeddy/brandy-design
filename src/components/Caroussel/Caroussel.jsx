import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MyCarousel = ({carouselData,styleImage,styleCaroucel}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 5000,
    };
  
    return (
        <section style={styleCaroucel}>
            <Slider {...settings}>
                {carouselData.map(item => (
                <div key={item.id}>
                    <img src={item.image} style={styleImage} alt={`Image ${item.id}`} />
                </div>
                ))}
            </Slider>
        </section>
    );
  };
export default MyCarousel
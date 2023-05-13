import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HotDealsCarosal.css';


function HotDealsCarousal({data}) {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (

    <div className="hotDealsCarousal">
      <Slider {...settings} >
              {data.map((item) => (
                  <div className="imgcard">
                    <div className="imgcard-top">
                      <img
                        src={
                           item
                        }
                        alt="hotdeals"
                      />
                    </div>
                    
                    </div>
                ))}


      </Slider>
    </div>
  );
}

export default HotDealsCarousal;
import React, { useState ,useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HotDealsCarosal.css';

import imgLogo from "../BlushMeLogo.png"


function HotDealsCarousal({data}) {
  const [defaultImage, setDefaultImage] = useState({});


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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgLogo,
    }));
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
                        // onError={handleErrorImage}
                      />
                    </div>
                    
                    </div>
                ))}


      </Slider>
    </div>
  );
}

export default HotDealsCarousal;
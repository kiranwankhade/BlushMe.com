import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousal2.css';

import imgLogo from "../BlushMeLogo.png"

import {FaHeart } from "react-icons/fa"
import axios from 'axios';

import {useToast,Text } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import StarRatings from './StarRatings';



function Carousal2({data}) {
  const [defaultImage, setDefaultImage] = useState({});

  const toast = useToast();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  let firstName =  JSON.parse(localStorage.getItem("FirstName")) || "";
  console.log("serverFirst",firstName)

 
  const likeFuc = () => {
    toast({
      title: 'Added to wishlist',
      description: "We've added this item to wishlist",
      variant:'subtle',
      duration: 3000,
      isClosable: true,
      position:'top-right'
    })

  }

  const handleWishlist = (item) => {
    if(firstName === ""){
      toast({
        title: 'Please Login First',
        status:'error',
        duration: 3000,
        isClosable: true,
        position:'top-right'
      })
    }else{
      likeFuc();
      return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`,item);
    }
    
  }


  const addtoCart = () => {
    toast({
      title: 'Added to Cart',
      description: "We've added this item to Cart",
      variant:'subtle',
      duration: 3000,
      isClosable: true,
      position:'top-right'
    })
  }

  const handleAddCart = (item) => {
    if(firstName === ""){
      toast({
        title: 'Please Login First',
        status:'error',
        duration: 3000,
        isClosable: true,
        position:'top-right'
      })
    }else{
      addtoCart()
      return axios.post(`https://busy-peplum-fawn.cyclic.app/cart`,item)
    }
    
  }

  return (

    <div className="Carousal2">
      <Slider {...settings} >
              {data.map((item,index) => (
                  <div className="card">
                    <Link to={`/${item.id}`}><div className="card-top">
                      <img
                        src={
                          defaultImage[item.name] === item.name
                            ? defaultImage.linkDefault
                            : item.image
                        }
                        alt={item.name}
                        onError={handleErrorImage}
                      />
                      <Text width={"90%"} margin="auto" noOfLines={1} marginTop={10} isTruncated='true'>{item.name}</Text>
                      <Text marginTop={5} fontSize={25} fontWeight={600} color='#fc2779'>₹ {item.price}</Text>
                      <Text><StarRatings value={item.ratings} /></Text>
                    </div></Link>
                    <div className="card-bottom">
                      <button style={{display:'flex',gap:'10px', alignItems:'center',justifyContent:'center'}} onClick={()=> {
                        handleWishlist(item)
                      
                      }}>WISHLIST<FaHeart/></button>
                      <button onClick={()=> {
                        handleAddCart(item)
                        // addtoCart()
                      }}>ADD TO CART</button>
                    </div>
                  </div>
                 
                ))}
      </Slider>
    </div>
  );
}

export default Carousal2;
import  { useState,useEffect } from 'react';

import "./Home.css"
import { 
  Flex,
  Text,
  Box, 
  IconButton, 
  useBreakpointValue,
  Center,
  VisuallyHidden,
  Button,
  Image,
  Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imgLogo from "../BlushMeLogo.png"

import Carousal2 from '../Components/Carousal2';

import HotDealsCarousal from '../Components/HotDealsCarosal';

// Settings for the slider first
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingCarousal = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settingCarousal: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settingCarousal: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settingCarousal: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};



export default function Home() {

  //first carousal
  const [slider, setSlider] = useState('');

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });



  // These are the images used in the slide
  const cards = [
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6b7bf5ff-c632-4b95-abaf-408c1c0d6edd.jpg&w=1200&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F326d1e4e-1c75-4b56-8533-0db3902a5815.jpg&w=1200&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1200&q=75','https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1200&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1200&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1200&q=75','https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1200&q=75',
  ];

  const hrStyle = {
    width: "10%",
    opacity: "1",
    borderTop: "2px solid #fc2779" ,
    color: "#fc2779",
  }

  const [getData,setGetData] = useState([]);
  
  
  useEffect(() => {
    fetchData();
    console.log("data",getData)
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://busy-peplum-fawn.cyclic.app/products`);
      setGetData(res.data);
    } catch (err) {
      return console.log(err);
    }
  }

  console.log("after useEffect",getData)


  const hotDeals = ['https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bc85906-26ba-41ed-a1b0-2ff7190ba9f8.jpg&w=1200&q=75',

  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6d8f9700-ca7f-44ae-bdef-68cc5dc2ded1.jpg&w=1200&q=75',
  
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F90a0f8b4-0ae4-4f0c-853d-ca54522fb509.jpg&w=1200&q=75',
  
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fd9560110-40f7-4d14-a98d-5599b45a84ef.jpg&w=1200&q=75',
  
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9ae9a1a3-977f-450b-b91b-1a5a38b9ca97.jpg&w=1200&q=75',
  
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F276dded6-686d-49b0-97a6-8f0b90dd61df.jpg&w=1200&q=75']

  return (
    <Box bg='#DCEEE6'>
      {/* first Carousal */}
      <Box
        position={'relative'}
        height={'325px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          fontSize={20}
          aria-label="left-arrow"
          colorScheme="blackAlpha"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiChevronLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          fontSize={20}
          aria-label="right-arrow"
          colorScheme="blackAlpha"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiChevronRight />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={'xs'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
       

       {/* second Carousal */}
      <Box marginTop={20} 
        height={'600px'} backgroundImage={'https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg'}>
        
        
        <Center w={'120%'}>
            <Flex alignItems='center' width={500}>
              <hr style={hrStyle}></hr>
              <Text padding={8} fontSize={25} color={'white'} fontFamily='sans-serif' display> BEST SELLER</Text>
              <hr style={hrStyle}></hr>
            </Flex>
        </Center>

        <Box 
         height={'550px'}
         width={'100%'}
         margin='auto'
         marginTop='-18px'
        >
            <Carousal2 data={getData} /> 
        </Box>  
          
        {/* Left Icon */}
        {/* <IconButton
          fontSize={20}
          aria-label="left-arrow"
          colorScheme="blackAlpha"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider1?.slickPrev()}>
          <BiChevronLeft />
        </IconButton> */}
       {/* <Box
        position={'relative'}
        height={'350px'}
        width={'80%'}
        margin='auto'
        overflow={'hidden'}>
        
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        
        
      <Slider  {...settings} >
          {cards.map((item, index) => (
             <Box >
             <Box >
               <Image
                 src={item.image}
                 alt={item.name}
               />
               <Text>{item.name}</Text>
               <Text>{item.price}</Text>
             </Box>
             <Box className="card-bottom">
                <Button>heart</Button>
                <Button>Add to Cart</Button>
             </Box>
           </Box>
          ))}
        </Slider> 

        <Slider {...settingCarousal}  ref={(slider1) => setSlider1(slider)}>
                {getData.map((item) => (
                  <div className="card">
                    <div className="card-top">
                      <img
                        src={
                          defaultImage[item.name] === item.name
                            ? defaultImage.linkDefault
                            : item.image
                        }
                        alt={item.name}
                        onError={handleErrorImage}
                      />
                      <h1>{item.name}</h1>
                    </div>
                    <div className="card-bottom">
                      <h3>{item.price}</h3>
                      <span className="category">{item.category}</span>
                    </div>
                  </div>
                ))}
        </Slider>


      </Box>  */}
       {/* Right Icon */}
       {/* <IconButton
          fontSize={20}
          aria-label="right-arrow"
          colorScheme="blackAlpha"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider1?.slickNext()}>
          <BiChevronRight />
        </IconButton>
        */}
      </Box>

      {/* hot deals */}
      <Box marginTop={15} 
        height={'450px'} >
        <Center w={'120%'}>
            <Flex alignItems='center' width={500}>
              <hr style={hrStyle}></hr>
              <Text padding={8} fontSize={25} color={'black'} fontFamily='sans-serif' display> HOT DEALS</Text>
              <hr style={hrStyle}></hr>
            </Flex>
        </Center>
        <Box  height={'300px'}
         width={'100%'}
         margin='auto'
         marginTop='-18px'>
           < HotDealsCarousal data={hotDeals}/>
        </Box>
      </Box>

      {/* JUST-IN*/}
      <Box marginTop={-15}
        height={'550px'}>
      
        <Center w={'120%'} marginTop="-20px">
            <Flex alignItems='center' width={500}>
              <hr style={hrStyle}></hr>
              <Text padding={8} fontSize={25} color={'black'} fontFamily='sans-serif' display> JUST-IN</Text>
              <hr style={hrStyle}></hr>
            </Flex>
        </Center>

        <Box 
         height={'450px'}
         width={'100%'}
         margin='auto'
         marginTop='-10px'
        >
            <Carousal2 data={getData} /> 
        </Box>  
      </Box>

      {/* sukar hai */}
      <Box marginTop={15} 
        height={'580px'} >
        <Center w={'110%'}>
            <Flex alignItems='center' width={550}>
              <hr style={hrStyle}></hr>
              <Text padding={8} fontSize={25} color={'black'} fontFamily='sans-serif' display> SHUKAR HAI, BLUSH-ME HAI</Text>
              <hr style={hrStyle}></hr>
            </Flex>
        </Center>
        <Image width={"80%"} margin='auto' src='https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg&w=1200&q=75'/>
        
      </Box>

      {/* TOP PICKS OF THE WEEK */}
     
       
    </Box>
   
  );
}
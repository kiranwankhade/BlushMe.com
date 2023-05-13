
import { Box, Flex, Heading, Select, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import StarRatings from "../Components/StarRatings";

const FaceCatPage = () => {
  const [getData, setGetData] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const toast = useToast()
  useEffect(() => {
    fetchData();
    console.log("data", getData);
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://busy-peplum-fawn.cyclic.app/products`
      );
      let data = res.data;

      let faceArray = data.filter((el) => {
        if (el.category === "Face") {
          return el;
        }
      });

      setGetData(faceArray);
    } catch (err) {
      return console.log(err);
    }
  };

  console.log("after useEffect", getData);


  //filter for price 

  async function onchangePrice(e){
    try{
        let res = await fetch(`https://busy-peplum-fawn.cyclic.app/products`);
        let data = await res.json();
  
        let tempArray = data.filter((el) => {
          if (el.category === "Face") {
            return el;
          }
        });
  
        if(e.target.value === ""){
          setGetData(tempArray);
        }else if(e.target.value === "HTL"){
          setGetData(tempArray.sort((a,b)=> (Number(b.price) - Number(a.price))));
        }else if(e.target.value === "LTH"){
          setGetData(tempArray.sort((a,b)=> (Number(a.price) - Number(b.price))));
        }
    }catch(err){
        console.log(err);
    }
        
}


//ratings

async function onchangeRatings(e){
  try{
      let res = await fetch(`https://busy-peplum-fawn.cyclic.app/products`);
      let data = await res.json();

      let tempArray = data.filter((el) => {
        if (el.category === "Face") {
          return el;
        }
      });

      if(e.target.value === ""){
        setGetData(tempArray);
      }else if(e.target.value === "HTL"){
        setGetData(tempArray.sort((a,b)=> (Number(b.ratings) - Number(a.ratings))));
      }else if(e.target.value === "LTH"){
        setGetData(tempArray.sort((a,b)=> (Number(a.ratings) - Number(b.ratings))));
      }
  }catch(err){
      console.log(err);
  }
      
}


const likeFuc = () => {
  toast({
    // colorScheme:'yellow',
    title: 'Added to wishlist',
    description: "We've added this item to wishlist",
    variant:'subtle',
    duration: 3000,
    isClosable: true,
    position:'top-right'
  })

}

const handleWishlist = (item) => {
  return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`,item)
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
  return axios.post(`https://busy-peplum-fawn.cyclic.app/cart`,item)
}
const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" >
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

let selection = 0;

  return (
    <div>
      <Heading marginTop={2}>Face Products</Heading>
      <Flex gap={8}>
        <Flex gap={5} padding='20px' width={'250px'} flexDirection={'column'}>
          <Text as={'h1'} fontWeight={'bold'} color={'pink.500'} fontSize={'25px'}>Filter</Text>
          <Select name="" onChange={(e)=>onchangePrice(e)}>
              <option value="">Price</option>
              <option value='HTL'>High to Low</option>
              <option value='LTH'>Low to High</option>
          </Select>
          <br/>

          <Select placeholder='Ratings' onChange={(e)=>{
            onchangeRatings(e)
           
            }}>
              <option value='HTL'>High to Low</option>
              <option value='LTH'>Low to High</option>
          </Select>

        </Flex>
        <Box style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',padding:'20px'}}>
          {
          getData.map((el) => (
            <div
              style={{
                width: "100%",
                margin: "15px 0px",
                padding:'25px',
                borderRadius:'15px',
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div>
                <img
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "120px",
                    height: "120px",
                  }}
                  src={el.image}
                  alt="cartImage"
                />

                <Text
                  width={"60%"}
                  margin="auto"
                  noOfLines={1}
                  marginTop={1}
                  isTruncated="true"
                >
                  {el.name}
                </Text>

                <Text
                  marginTop={5}
                  fontSize={25}
                  fontWeight={600}
                  color="#fc2779"
                >
                  ₹ {el.price}
                </Text>
                  {/* {setRatingValue(el.ratings)} */}
                <Text>Ratings: 
                  
                   {Array.from({ length: 5 }, (v, i) => (
                    
                    <Star
                      starId={i + 1}
                      key={`star_${i + 1}`}
                      marked={selection ? selection >= i + 1 : el.ratings >= i + 1}
                    />
                  ))
                  }</Text>
              </div>
              <Flex className="card-bottom">
                      <button style={{display:'flex',gap:'10px', alignItems:'center',justifyContent:'center'}} onClick={()=> {
                        handleWishlist(el)
                        likeFuc()
                      }}>WISHLIST<FaHeart/></button>
                      <button onClick={()=> {
                        handleAddCart(el)
                        addtoCart()
                      }}>ADD TO CART</button>
              </Flex>
            </div>
          ))
          }
        </Box>
      </Flex>
    </div>
  );
};

export default FaceCatPage;

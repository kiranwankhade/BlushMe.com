import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Text,
    Box,
    Flex,
    Image,
    Button,useToast,Divider 
  } from '@chakra-ui/react'
 
import {FaAngleRight ,FaHeart,FaAngleDown } from "react-icons/fa"

import {MdOutlineCrueltyFree,MdOutlineWaterDrop,MdSettings,MdOutlineAssignmentReturn} from "react-icons/md"

import { Link, useNavigate } from 'react-router-dom';

export default function ItemDetails(){
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({})
    useEffect(() => {
        fetch(`https://busy-peplum-fawn.cyclic.app/products/${id}`)
          .then((res) => res.json())
          .then((res) => setItemDetail(res))
          .catch((err) => console.log(err))
      }, [])

    console.log(id)
    console.log(itemDetail)
    const { name, price, description, category, image, ratings , view } = itemDetail
    const toast = useToast()

    const likeFuc = () => {
      
        toast({
          // colorScheme:'yellow',
          title: 'Added to wishlist',
          description: "We've added this item to wishlist",
          variant:'subtle',
          duration: 3000,
          isClosable: true,
          
        })
    
      }
    
      const handleWishlist = (item) => {
        return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`,item)
      }
    
    
      const addtoCart = () => {
        toast({
          // colorScheme:'yellow',
          title: 'Added to Cart',
          description: "We've added this item to Cart",
          variant:'subtle',
          duration: 3000,
          isClosable: true,
          
        })
    
        // alert("We've added this item to Cart")
      }
    
      const handleAddCart = (item) => {
        return axios.post(`https://busy-peplum-fawn.cyclic.app/cart`,item)
      }

      const hideDiv = {
        display:'none',
        width:'90%',
        margin:"auto",
        marginTop:'20px',
        
    }

    const [angle,setAngle] = useState(false)

      const handleReadMore = () =>{
        const targetDiv = document.getElementById("disHideDiv");
        // document.getElementById("hideDiv").style.display = "block"
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
            setAngle(false)
          } else {
            targetDiv.style.display = "block";
            setAngle(true)
          }
    }

    return (
        <Box w={'90%'} margin='auto'>
            <Box marginTop={5}>
                <Breadcrumb marginLeft={-10} alignItems='left' spacing='8px' separator={<FaAngleRight color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <Text width="50%" noOfLines={1}>{name}</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <Flex marginTop={15} gap={5}>
                <Image width={'40%'} height={'400px'} src={image} alt="detailsimage" display={'block'} margin='auto'/>
                <Box>
                    <Text textAlign={'justify'} fontSize={20} fontWeight={500}>{name}</Text>
                    <Text marginTop={5} w={'20%'} borderRadius={'10px'} border={'1px solid gray'}> ★ {ratings} ({view})</Text>

                    <Flex marginTop={10} gap={8} alignItems='center'>
                        <Text fontSize={20}>₹ {price}</Text>
                        <Button h={18} padding={'3px 5px'} fontSize={12} borderRadius={4} color={'white'} bg={'#2d8c00' }>FREE SHIPPING</Button>
                        <Text fontStyle= "italic"
                            opacity= '.7'
                            marginLeft={5}
                            fontWeight={400}
                            fontSize={9}
                            lineHeight='10.55px'>(T&C applicable)</Text>
                    </Flex>

                    <Text marginTop={10} fontSize={20} textAlign='justify'>AVAILABLE OFFERS!!</Text>
                    <ul style={{textAlign:'justify' , marginTop:'10px', marginLeft:'20px'} }>
                        <li>Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999 <span style={{textDecoration:'underline'}}> Know More</span></li>
                        <li>Grab A Complimentary Product Worth Rs.1400 On A Spend Of Rs.3399Grab A Complimentary Product Worth Rs.1400 On A Spend Of Rs.3399<span style={{textDecoration:'underline'}}> Know More</span></li>
                    </ul>

                    <div style={{ margin:" 10px 0px",
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "10px",
                            padding: "5px" }}>
                            <button style={{display:'flex',gap:'10px', alignItems:'center',justifyContent:'center' ,width: "120px",
                            backgroundColor: "black",
                            color:"white",
                            padding: "8px",
                            borderRadius:"10px",}} onClick={()=> {
                                handleWishlist(itemDetail)
                                likeFuc()
                            }}>WISHLIST<FaHeart/></button>
                            <button style={{width: "120px",
                            backgroundColor: "black",
                            color:"white",
                            padding: "8px",
                            borderRadius:"10px"}} onClick={()=> {
                                handleAddCart(itemDetail)
                                addtoCart()
                            }}>ADD TO CART</button>
                    </div>

                    <Divider variant="dashed" borderColor="gray.500"/>

                    <Flex fontSize={15} marginTop={5} marginBottom={5} gap={5} alignItems='center'>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineCrueltyFree/>
                            <Text>Cruelty Free</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineAssignmentReturn/>
                            <Text>Easy Return</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdSettings/>
                            <Text>Quality First</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineWaterDrop/>
                            <Text>Dermatologically Tested</Text>
                        </Flex>
                    </Flex>
                    <Divider variant="dashed" borderColor="gray.500"/>
                    
                    <div style={{display:'flex', alignItems:'center' , justifyItems:'flex-start' ,marginTop:'10px' , marginBottom:'10px'}} >
                        
                        <button style={{display:"flex", alignItems:'center', fontSize:'20px', marginLeft:'10px',color:'#fb3380', cursor:'pointer'}} onClick={handleReadMore}><span style={{fontSize:'18px', fontWeight:'600'}}>Description</span>{angle ? <FaAngleDown/>:<FaAngleRight/>}</button>
                    </div>
                    <div id="disHideDiv" style={hideDiv}>
                        <p style={{textAlign:'justify'}}>{description}</p>
                    </div>
                    <Divider variant="dashed" borderColor="gray.500"/>

                     <Link to={'/cart'}><Button display={'block'}  marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'}> GO TO CART</Button></Link>
                </Box>
    
            </Flex>
        </Box>
    )
}



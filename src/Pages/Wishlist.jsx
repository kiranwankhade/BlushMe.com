import { Box, Flex, Grid, GridItem,
    Text,Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,InputGroup,Input,Divider } from "@chakra-ui/react"
    
    import {FaAngleRight ,FaHeart,FaAngleDown } from "react-icons/fa"
    
    import { useState,useEffect } from "react"
    
    import { Link } from "react-router-dom";
    
    import axios from "axios";
    
    export default function Wishlist () {
    
        const [items,setItems] = useState([])

        useEffect(() => {
            fetchData();
            console.log("data",items)
        }, []);
    
        const fetchData = async () => {
            try {
            const res = await axios.get(`https://busy-peplum-fawn.cyclic.app/wishList`);
            setItems(res.data);
           
            } catch (err) {
            return console.log(err);
            }
        }
    
      console.log("after useEffect",items)
    
        
        const handleRemove = (id) => {
            return axios.delete(`https://busy-peplum-fawn.cyclic.app/wishList/${id}`);
        }

        const removeFuc = (id) => {
            handleRemove(id);
            fetchData();
        }

      
        return (
            <>
    
                <Box marginTop={5}>
                    <Breadcrumb width={'90%'} margin={'auto'} alignItems='left' spacing='8px' separator={<FaAngleRight color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
    
                        <BreadcrumbItem isCurrentPage>
                            <Text >Wish-List</Text>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
             
                {/* <Box> */}
                    {
                        items.length== 0 ? 
                        <div>
                             <Text width={"80%"} fontSize={25} margin='auto' > WishList is Empty </Text>
                             <Link to={'/'}><Button  width={"10%"}  margin='auto' display={'block'}  marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'}> GO HOME</Button></Link>
                        </div> : 
                    
                        <div style={{width:'95%' , margin:'auto',display:'grid' , gridTemplateColumns:'repeat(4,1fr)' , gap:'5px',marginTop:'30px' ,marginBottom:'20px',flex:'6'}}>
                            {
                                items.map((el)=> (
                                    <div style={{width:'100%' , boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                                        <div >
                                        <img
                                            style={{display:'block', margin:'auto',width:'100%',
                                            height:'300px'}}
                                            src={el.image}
                                            alt="cartImage"
                                        />
                                        <Text width={"60%"} margin="auto" noOfLines={3} marginTop={1} isTruncated='true'>{el.name}</Text>
                                        <Text marginTop={5} fontSize={25} fontWeight={600} color='#fc2779'>₹ {el.price}</Text>
                                        </div>
                                        <div style={{width:'80%',margin:'auto'}}>
                                            <button style={{backgroundColor:'black',color:'white',padding:'8px', width:'120px',marginTop:'10px',marginBottom:'10px',borderRadius:'10px'}} onClick={()=> {
                                                removeFuc(el.id)
                                            }}>REMOVE</button>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
    
                    }
                
                {/* </Box> */}
                
              {/* </Flex> */}
            </>
        );
    }
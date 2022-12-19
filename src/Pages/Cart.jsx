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
    
    export default function Cart () {
    
        const [items,setItems] = useState([])
      
        useEffect(() => {
            fetchData();
            console.log("data",items)
        }, []);
    
        const fetchData = async () => {
            try {
            const res = await axios.get(`https://busy-peplum-fawn.cyclic.app/cart`);
            setItems(res.data);
            } catch (err) {
            return console.log(err);
            }
        }
    
      console.log("after useEffect",items)
    
      const hideDiv = {
        display:'none',
        width:'90%',
        margin:"auto",
        marginTop:'20px',
        
    }
    
        const [angle,setAngle] = useState(false);
    
        const [apply,setApply] = useState("")
    
        const handleReadMore = () =>{
            const targetDiv = document.getElementById("hideDiv");
            // document.getElementById("hideDiv").style.display = "block"
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                setAngle(false)
              } else {
                targetDiv.style.display = "block";
                setAngle(true)
              }
        }
    
        const cartItemPrice = items.reduce(function(acc,el){
            return acc+el.price;
        },0);
    
        const [total,setTotal] = useState(0)

        const applypromo = (cartItemprice) => {
            
            // if(apply === "BLUSHME123"){
            //     let dis = (30 / 100);
            //     console.log("dis",dis)
            //     let totalValue = cartItemprice - (cartItemprice * dis)
            //     setTotal(totalValue)
            //     // console.log("total",totalValue)
            //     alert("Applied promo discount")
            // }
            
            // else{
            //     alert("promo not applicable")
            // }
        }
    
    
        return (
            <>
    
                <Box marginTop={5}>
                    <Breadcrumb width={'90%'} margin={'auto'} alignItems='left' spacing='8px' separator={<FaAngleRight color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
    
                        <BreadcrumbItem isCurrentPage>
                            <Text >Cart</Text>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
    
             
                {/* <Box> */}
                    {
                        items.length== 0 ? <div>
                             <Text width={"80%"} fontSize={25} margin='auto' > Cart is Empty </Text>
                             <Link to={'/'}><Button  width={"10%"}  margin='auto' display={'block'}  marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'}> GO TO Back</Button></Link>
                        </div> : 
                        <Flex  gap='5' width={"95%"} margin='auto'>
                            <div style={{width:'100%' , margin:'auto',display:'grid' , gridTemplateColumns:'repeat(3,1fr)' , gap:'5px',marginTop:'30px' ,marginBottom:'20px',flex:'6'}}>
                            {
                                items.map((el)=> (
                                    <div style={{width:'100%' , boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                                        <div >
                                        <img
                                            style={{display:'block', margin:'auto',width:'120px'}}
                                            src={el.image}
                                            alt="cartImage"
                                        />
                                        <Text width={"60%"} margin="auto" noOfLines={3} marginTop={1} isTruncated='true'>{el.name}</Text>
                                        <Text marginTop={5} fontSize={25} fontWeight={600} color='#fc2779'>₹ {el.price}</Text>
                                        </div>
                                        <div style={{width:'80%',margin:'auto'}}>
                                            <button style={{backgroundColor:'black',color:'white',padding:'8px', width:'120px',marginTop:'10px',marginBottom:'10px',borderRadius:'10px'}} onClick={()=> {
                                                // handleRemove(el.id)
                                            }}>REMOVE</button>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
    
                            <Box>
                                <Text fontSize={25} fontWeight={500} textAlign={'justify'}>APPLY COUPON</Text>
                                <InputGroup size="md"  gap={2} width="70%" alignItems={'flex-start'} marginTop={5}>
    
                                    <Input type='text' width="600px" borderColor={"gray"} placeholder={`Enter Coupon`} _placeholder={{ opacity: 1}} onChange={(e)=>setApply(e.target.value)}/>
    
    
                                    <Button color={"white"} bg={'black'} _hover='none' onClick={ applypromo(cartItemPrice)}> APPLY</Button>
    
                                </InputGroup>
    
                                <Divider marginTop={5} variant="dashed" borderColor="gray.500"/>
    
                                <div style={{display:'flex', alignItems:'flex-start' , justifyItems:'flex-start' ,marginTop:'10px' , marginBottom:'10px'}} >
                                    <h1 style={{fontSize:'18px', fontWeight:'600'}}>COUPON DETAILS</h1>
                                    <button style={{fontSize:'20px', marginLeft:'10px',color:'#fb3380', cursor:'pointer'}} onClick={handleReadMore}>{angle ? <FaAngleDown/>:<FaAngleRight/>}</button>
                                </div>
                                <div id="hideDiv" style={hideDiv}>
                                    <p style={{textAlign:'justify',fontSize:"20px"}}>Add "BLUSHME123"</p>
                                </div>
    
                                <Text fontSize={25} fontWeight={500} textAlign={'justify'} textDecoration='underline' textDecorationColor={'#fb3380'} >PRICE DETAILS</Text>
    
                                <Box width={"80%"} >
                                    <Flex gap={2} justifyContent='space-between' fontSize={20}>
                                        <Text>Sub Total</Text>
                                        <Text>₹ {cartItemPrice}</Text>
                                    </Flex>
                                    <Flex  gap={2} justifyContent='space-between' fontSize={20}>
                                        <Text>Tax</Text>
                                        <Text>₹ 152</Text>
                                    </Flex>
                                    <Flex  gap={2} justifyContent='space-between' fontSize={20}>
                                        <Text>Shipping</Text>
                                        <Text color={'green'}>free</Text>
                                    </Flex>
                                    <Divider marginTop={5} variant="dashed" borderColor="gray.500"/>
    
                                    <Flex  gap={2} justifyContent='space-between' fontSize={20}>
                                        <Text>Total Price</Text>
                                        <Text>₹ {cartItemPrice + 152}</Text>
                                    </Flex>
    
                                </Box>

                                <Link to={'/payment'}>
                                    <Button width={"30%"} marginLeft={8} margin='auto' display={'block'}  alignItems={'justify'} marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'}> Go To Payment</Button>
                                </Link>
                            </Box>
    
                        </Flex>
                    }
                
                {/* </Box> */}
                
              {/* </Flex> */}
            </>
        )
    }
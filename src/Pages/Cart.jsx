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

        const [val, setVal] = useState(0)
        
        // setVal(cartItemPrice+152)

        const [apply,setApply] = useState("");

        const [alertMessage,setAlertMessage] = useState("")

        // const [final,setFinal] = useState(firstTotal);
        const [final,setFinal] = useState(val)

        const [color,setColor] = useState("")
        useEffect(() => {
            fetchData();
            console.log("data",items)
        }, [val]);
    
        const fetchData = async () => {
            try {
            const res = await axios.get(`https://busy-peplum-fawn.cyclic.app/cart`);
            setItems(res.data);
            let x=0;
              for(let i=0;i<res.data.length;i++)
               {
                    x=res.data[i].price+x;
               }
               setVal(x);
               setFinal(x+152)
          
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
    
        

        // console.log("FirstFinalTotal",final)

        // setTotal(firstTotal)

        const applyPromoFunc = (val) => {
            console.log("apply",apply)
            if(apply === "BLUSHME123"){
                let dis = (30 / 100);
                console.log("dis",dis)
                let totalValue = Math.floor(val - (val * dis))
                
                // setVal(totalValue)
                setFinal(totalValue)
                
                // console.log("total",totalValue)
                setAlertMessage("Applied promo discount");
                setColor("green")
                // alert("Applied promo discount")
            }
            
            else{
                // alert("promo not applicable")
                setAlertMessage("Promo not applicable");
                setColor("red")
            }
        }
    
        
        const handleRemove = (id) => {
            return axios.delete(`https://busy-peplum-fawn.cyclic.app/cart/${id}`);
        }

        const removeFuc = (id) => {
            handleRemove(id);
            fetchData();
        }

        const paymentFunc = (final) => {
            let obj = {
                total:final,
                totalItems: items.length
            }

            localStorage.setItem("priceTotal",JSON.stringify(obj));
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
                             <Link to={'/'}><Button  width={"10%"}  margin='auto' display={'block'}  marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'}> GO HOME</Button></Link>
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
                                                removeFuc(el.id)
                                            }}>REMOVE</button>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
    
                            <Box>
                                <Text fontSize={25} fontWeight={500} textAlign={'justify'}>APPLY COUPON</Text>
                                <InputGroup size="md"  gap={2} width="70%" alignItems={'flex-start'} marginTop={5}>
    
                                    <Input type='text' width="600px" borderColor={"gray"} placeholder={`Enter Coupon`} _placeholder={{ opacity: 1}} onChange={(e)=>setApply(e.target.value)} value={apply}/>
    
    
                                    <Button color={"white"} bg={'black'} _hover='none' onClick={()=>{
                                        let total = val +152;
                                        applyPromoFunc(total)}}
                                    > APPLY</Button>
    
                                </InputGroup>
                                
                                <Text fontSize={20} marginTop={2} color={color} textAlign='justify'>{alertMessage}</Text>

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
                                        <Text>₹ {val}</Text>
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
                                        <Text>₹ {final}</Text>
                                    </Flex>
    
                                </Box>

                                <Link to={'/payment'}>
                                    <Button width={"30%"} marginLeft={8} margin='auto' display={'block'}  alignItems={'justify'} marginBottom={8} marginTop={8} bg={'black'} color='white' padding={2} _hover={'#00000'} onClick={paymentFunc(final)}> Go To Payment</Button>
                                </Link>
                            </Box>
    
                        </Flex>
                    }
                
                {/* </Box> */}
                
              {/* </Flex> */}
            </>
        );
    }
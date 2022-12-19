import { 
Text,
Flex,
Button, 
Box,Center,
Input, 
InputGroup,
Image,
Divider
} from "@chakra-ui/react"
import { doc } from "prettier"

import {FaAngleRight,FaFacebookF,FaTumblr,FaYoutube,FaTwitter,FaInstagram,FaPinterest} from "react-icons/fa"

import {ImMail4} from "react-icons/im"
import { Link } from "react-router-dom"

import logo from '../BlushMeLogo.png'


export default function Footer1(){

    const handleReadMore = () =>{
        const targetDiv = document.getElementById("hideDiv");
        // document.getElementById("hideDiv").style.display = "block"
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
          } else {
            targetDiv.style.display = "block";
          }
    }

    const hideDiv = {
        display:'none',
        width:'90%',
        margin:"auto",
        marginTop:'20px',
        
    }
    const hrStyle = {
        width: "10%",
        opacity: "1",
        borderTop: "2px solid #fc2779" ,
        color: "#fc2779",
      }
    return (
        <>
            <Divider borderColor={'grey.900'} width='90%' margin='auto' marginTop='0px'/>
            <div style={{display:'flex', alignItems:'center' , justifyItems:'flex-start' ,width:'90%',margin:'auto',marginTop:'20px'}} >
                 <h1 style={{fontSize:'18px', fontWeight:'600'}}>READ MORE ABOUT SUGAR COSMETICS</h1>
                 <button style={{fontSize:'20px', marginLeft:'10px',color:'#fb3380', cursor:'pointer'}} onClick={handleReadMore}><FaAngleRight/></button>
            </div>
            <div id="hideDiv" style={hideDiv}>
                <p style={{textAlign:'justify'}}> Enhance your beauty looks with SUGAR COSMETICS
                    Your search for a makeup and beauty range that’s cruelty-free, high on style, and even higher on performance ends here at SUGAR Cosmetics! SUGAR makeup stands for striking formulas that perfectly suit every Indian skin tone, extremely rich colour payoff, along with a unique and incredible range of products that stand the test of time. This hugely popular range of premium colour cosmetics and beauty products are crafted in state-of-the-art facilities across Germany, Italy, India, USA, and Korea. The clutter-breaking 450+ makeup products are skillfully wrapped in a signature low-poly mosaic designed packaging that is bursting with colour and is sure to complement the sweet and sassy side of you.

                    The chart-topping makeup & beauty range is spread across categories like Lip makeup, Eye makeup, Face makeup, Nail paints and Skin care. The best-selling beauty products in India extend from the long lasting lipsticks to creamy lip crayons, lip primers to eyebrow definers, foundation stick with an inbuilt brush to cushion BB compacts, setting mist to makeup cleansing water. SUGAR has pioneered the trend shift towards “mattes'' with its cult-favourite range of Matte Liquid Lipsticks and equally popular Matte Eyeliners. Some of the recent innovations like the ultra-luxe range of lipsticks called Mettle, Jelly Highlighters, a range of face makeup including colour correctors, highlighters, bronzers and blushes in a stick format, have created waves in the makeup market. Say hello to SUGAR’s newest skincare category with our range of Sheet Masks, Clay Masks, Eye Creams and a ground-breaking hyaluronic acid and Vitamin C skincare range and so much more.

                    So get ready to dive into the world of SUGAR Cosmetics and rule the world, one look at a time!</p>
            </div>

            <Box marginTop={15} 
                height={'580px'} >
                <Center w={'110%'}>
                    <Flex alignItems='center' width={550}>
                    <hr style={hrStyle}></hr>
                    <Text padding={8} fontWeight={600} fontSize={25} color={'black'} fontFamily='sans-serif' display> LET’S STAY IN TOUCH</Text>
                    <hr style={hrStyle}></hr>
                    </Flex>
                </Center>
                <Text marginTop={-5}>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</Text>
                <InputGroup size="md" alignItems={{base: 'center'}} width="50%" margin={'auto'} marginTop={8}>
                    <Input type={'email'}  width="600px" borderRightRadius="none" borderRight="none" borderColor={"gray"} variant="outline"  size="md" placeholder={`Enter Email`}  _placeholder={{ opacity: 1,}}/>

                    <Button color={"white"} borderLeft="none" bg={'black'} borderLeftRadius="none" _hover='none'> SUBSCRIBE</Button>
                </InputGroup>
            
            </Box>
            <Image
                   position="relative"
                   width= "180px"
                   height="100px"
                //    marginLeft= "7%"
                //    marginRight='7%'
                display="block"
                margin="auto"
                //    marginTop= {10}
                marginTop="-350px"
                   src={logo}
                   alt='logo'   />
           
            <Box marginTop="-50px"  backgroundColor={'#141414'}>
              
               {/* icon  */}
               <Box border={'1px solid #141414'}>
               {/* FaFacebookF,FaTumblr,FaYoutube,FaTwitter,FaInstagram,FaPinterest */}
                    <Box marginTop={100} >
                        <Flex fontSize={25} gap='8' color='#CC913F' justifyContent={'center'}>
                            <FaFacebookF/>
                            <FaTumblr/>
                            <FaYoutube/>
                            <FaTwitter/>
                            <FaInstagram/>
                            <ImMail4/>
                            <FaPinterest/>
                        </Flex>
                    </Box>
                    <Divider border={'2px solid'} borderColor={'grey'} width='90%' margin='auto' marginTop='20px'/>

                    <Flex fontSize={25} gap='8' color='#CC913F' justifyContent={'center'} marginTop={15}>
                        <Link>Stores</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Returns</Link>
                        <Link>FAQs</Link>
                        <Link>About Us</Link>
                    </Flex>
                    <Divider border={'2px solid'} borderColor={'grey'} width='90%' margin='auto' marginTop='20px'/>

                    <Text width='90%' margin='auto' fontSize={25} color='#CC913F' align={'left'}>GET IN TOUCH</Text>

                    <Flex width='90%' fontSize={20} gap='8'            color='#CC913F' justifyContent={'flex-start'}margin='auto' marginTop={15} >
                        <Box textAlign={"justify"}>
                           <Text>Call Us at</Text>
                           <Link>1800-209-9939</Link>
                           <Text>Monday to Friday : 9 AM to 7 PM</Text>
                        </Box>

                        <Box textAlign={"justify"}>
                           <Text>Support</Text>
                           <Link>hello@sugarcosmetics.com</Link>
                        </Box>

                        <Box textAlign={"justify"}>
                           <Text>Careers</Text>
                           <Link>We're hiring!</Link>
                        </Box>

                        <Box textAlign={"justify"}>
                           <Text>Press & Media</Text>
                           <Link>pr@sugarcosmetics.com</Link>
                        </Box>

                        <Box textAlign={"justify"}>
                           <Text>Influencer Collab</Text>
                           <Link>Join Us</Link>
                        </Box>
                    </Flex>

                    <Divider border={'2px solid'} borderColor={'grey'} width='90%' margin='auto' marginTop='20px'/>

                    <Flex  width='90%' fontSize={20} gap='8'            color='#CC913F' justifyContent={'center'}margin='auto' marginTop={15} >
                        <Box textAlign={'justify'}>
                            <Text fontSize={20}>GET THE NEW SUGAR APP TODAY!</Text>
                            <Text>Tap into a better shopping experience.</Text>
                        </Box>
                        
                        <Flex marginTop={3} fontSize={20} gap='5'justifyContent={'center'} >
                            <Box >
                                <Image   width= "100px"
                                        height="60%" src="https://in.sugarcosmetics.com/playstore.png" alt="google"/>
                            </Box>
                            <Box>
                                <Image   width= "100px"
                                        height="60%" src="https://in.sugarcosmetics.com/apple-store.png" alt="apple"/>
                            </Box>
                        </Flex>
                       
                    </Flex>

                    <Divider border={'2px solid'} borderColor={'grey'} width='90%' margin='auto' marginTop='20px'/>


                    <Text width='90%' margin='auto' marginTop={5}  marginBottom={5} fontSize={15} color='#CC913F' align={'center'}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.
</Text>


               </Box>
            </Box>
        </>
    )
}
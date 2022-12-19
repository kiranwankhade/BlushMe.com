
import { 
    Image ,
    Text ,
    InputGroup,
    InputLeftAddon,
    Input,
    FormControl,
    FormLabel,
    Button,
    Divider ,
    Checkbox,
    Flex,
    Box,
    HStack,
    InputRightElement,
    Stack,
    Heading,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  import { Link } from "react-router-dom";
  
  import {FaArrowLeft} from "react-icons/fa"
  import { useState } from "react";

  import axios from "axios";

  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  const LoginForm = () => {
   
    const divStyle = {
      width:'50%',
      backgroundImage: "url(" + ' https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png' + ")"
    }
  
    const [showPassword, setShowPassword] = useState(false);

    const [firstName,setFirstName] = useState("")
    
   
    const handleWishlist = (firstName) => {
        // return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`,firstName)
        localStorage.setItem("FirstName",JSON.stringify(firstName));

    }

    return (
        <div style={ {width:'100%', display:"flex" , flexDirection:'row'}}>
          
          <Image
                  boxSize='150px'
                  objectFit='cover'
                  src='https://media.sugarcosmetics.com/upload/authSIe2.jpg'
                  alt='logo'
                  width='50%'
                  height='799px'
          />
         
          <div style={divStyle}>
                <div style={{ padding:"10px"}}>
                    <Link to={'/'}><FaArrowLeft/></Link>
                </div>
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    >
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                        <Heading fontSize={'3xl'} textAlign={'center'}>
                            Please Fill the Following Form
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                        </Stack>
                        <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" onChange={(e)=> setFirstName(e.target.value)}/>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={() =>
                                    setShowPassword((showPassword) => !showPassword)
                                    }>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                            <Link to={"/"}><Button
                                loadingText="Submitting"
                                size='md'
                                height='48px'
                                width='200px'
                                bg={'#fb3380'}
                                color={'white'}
                                _hover={{
                                bg: '#fb3380',
                                }} onClick={handleWishlist(firstName)}>
                            SUBMIT
                            </Button></Link>
                            </Stack>
                            <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                            </Stack>
                        </Stack>
                        </Box>
                    </Stack>
                </Flex>
  
                <Text width='90%' margin='auto' marginTop='5px' align={'right'}>Need Help?<span style={{color:"#fc2f92"}}> Contact Us</span></Text>
  
                <Divider borderColor={'grey'} width='90%' margin='auto' marginTop='10px'/>
                
                <Text width='90%' margin='auto' >By Signing up or logging in, you agree to our<span style={{color:"#fc2f92"}}> Terms and Conditions</span></Text>
  
          </div>
        </div>
      )
    };
    
  export default LoginForm;
    
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    useDisclosure,
    Image,
    Input, 
    InputGroup, 
    InputLeftElement
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    SearchIcon
  } from '@chakra-ui/icons';

  import {Link} from "react-router-dom"

  import logo from '../BlushMeLogo.png'

  import { FaUserCircle , FaRegHeart  } from "react-icons/fa";

  import {MdOutlineLocalOffer} from "react-icons/md"


  import {BsHandbag} from "react-icons/bs"
import { useState,useEffect } from 'react';
  
  export default function Navbar1() {
    const { isOpen, onToggle } = useDisclosure();
    const linkStyle = {
        fontSize:"20px",
        color:'#CC913F'
    }

    const logOut = () => {
      localStorage.removeItem("FirstName");
      setServerFirst("")
    }
    
    const [serverFirst,setServerFirst] = useState("")
    console.log('serverFirst:', serverFirst)

    useEffect(() => {
      let firstName =  JSON.parse(localStorage.getItem("FirstName")) || "";
      console.log("firstName",firstName);
      setServerFirst(firstName)
    }, [serverFirst])
   

    return (
      <Box bg={useColorModeValue('#292929', '#976d33')}>
        <Flex
        //  position={"fixed"}
          bg={useColorModeValue('#292929', '#976d33')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'} 
          width='98%'  
          margin="auto">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} gap={10}>
            <Link to={"/"}>
            <Image
                boxSize='150px'
                objectFit='cover'
                src={logo}
                alt='logo'
                width='250px'
                height='60px'/>
            </Link>
           

            <InputGroup  size="md" alignItems={{base: 'center'}}>
            <InputLeftElement
              className="InputLeft"
              pointerEvents="none"
              marginLeft = {2}
              marginTop = {3}
            
              children={<SearchIcon className="SearchIcon" color="#976d33" />}
              size="md"
            />
           <Input color={"#976d33"}  width="650px" _hover={'pink.200'}  variant="outline" borderColor={"#976d33"} size="md" placeholder={`Try "Liquid lipstick"`} focusBorderColor='#976d33'  _placeholder={{ opacity: 1, color: '#976d33'}} /> 

                {/* <Button color={"#292929"} borderLeft="none" bg={'#e6d789'} borderLeftRadius="none" _hover='#e6d789'>{} Search</Button> */}
            </InputGroup>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <Stack direction={'row'} spacing={20} align="center">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
                        <Icon  style={linkStyle} as={FaUserCircle} /> 
                        {
                          serverFirst==="" ?  <Link to='/loginForm' style={linkStyle}>
                                                  Login/Registration
                                              </Link> : <Flex gap={5} flexDirection={'row'} alignItems={'center'}>
                                              <Text style={linkStyle}>{serverFirst}</Text>
                                              <Button  fontSize="20px"
                                                color='#CC913F' padding={5} bg={'#292929'} border={'1px solid #CC913F'} _hover={{
                                                bg:'#CC913F', border:'1px solid #292929', color:'#292929'
                                              }} onClick={logOut}>Logout</Button>
                                              </Flex>
                        }
                       
                    </div>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"20px"}}>
                        {NAV_ITEMS.map((navItem) => (
                            <div style={{ display:"flex" , flexDirection:"row", gap:"10px" , justifyContent:"space-between" , alignItems:"center"}} >
                                    <Link to={navItem.to ?? '#'} style={linkStyle}>
                                        <Icon  style={linkStyle} as={navItem.icon} /> 
                                    </Link>
                            </div>
                        ))}
                    </div>
                  
                </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  }
  
  const NAV_ITEMS = [
    // {
    //   label: 'Login/Registration',
    //   to:'/login',
    //   icon:FaUserCircle

    // },
    {
    //   label: 'WishList',
      to:'/wishlist',
      icon:FaRegHeart
    },
    {
    //   label: 'Cart',
      to: '/cart',
      icon:BsHandbag
    },
    {
    //   label: 'Offer',
      to: '/offer',
      icon:MdOutlineLocalOffer
    },
  ];
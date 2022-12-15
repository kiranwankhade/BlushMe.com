
import { 
  Image ,
  Text ,
  InputGroup,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import {FaArrowLeft} from "react-icons/fa"

const Login = () => {
 
  const divStyle = {
    width:'50%',
    backgroundImage: "url(" + ' https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png' + ")"

  }

    return (
      <div style={ {width:'100%', display:"flex" , flexDirection:'row'}}>
        
        <Image
                boxSize='150px'
                objectFit='cover'
                src='https://media.sugarcosmetics.com/upload/authSIe2.jpg'
                alt='logo'
                width='50%'
                height='489px'
        />
       
        <div style={divStyle}>
              <div style={{ padding:"10px"}}>
                  <Link to={'/'}><FaArrowLeft/></Link>
              </div>
              
              <Image boxSize='150px'
                    objectFit='fill'
                    src='	https://media.sugarcosmetics.com/upload/Hi!.png'
                    alt='hii'
                    width='20%'
                    height='18%'
                    display="block"
                    margin="auto"
              />
              <div style={{width:"50%" ,margin:"auto"}}>
                <Text fontSize={20}  fontWeight={700}>Login/Sign Up Using Phone</Text>
                {/* <div> */}
                  <InputGroup marginTop={4} >
                    <InputLeftAddon  padding={6} borderColor='grey' fontWeight={700}  children='+91' />
                    <Input focusBorderColor="grey.900"  borderColor='grey' borderLeft={'none'} padding={6} type='tel' placeholder='phone number' />
                  </InputGroup>
                {/* </div> */}
                 
              </div>
              
          
          <h1>Hiiii</h1>
        </div>
      </div>
    )
  };
  
export default Login;
  
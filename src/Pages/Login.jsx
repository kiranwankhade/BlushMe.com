
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
  Checkbox
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import {FaArrowLeft} from "react-icons/fa"
import { useState } from "react";

const Login = () => {
 
  const divStyle = {
    width:'50%',
    backgroundImage: "url(" + ' https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png' + ")"
    

  }

  const [mobi,setMobi] = useState()

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
                    <InputLeftAddon  padding={6} borderColor='#d8d8d8' fontWeight={700}  children='+91' />
                    <Input focusBorderColor="#d8d8d8" borderColor='#d8d8d8' borderLeft={'none'} padding={6} type='text' placeholder='Mobile Number' maxlength="10" minLength='10' onChange={(e)=>{setMobi(e.target.value)}}/>
                  
                    {/* <Input focusBorderColor="#d8d8d8" borderColor='#d8d8d8' borderLeft={'none'} padding={6} type='tel' placeholder='Mobile Number' maxlength="10" minLength='10' pattern="([0-9]|[0-9]|[0-9])" onChange={(e)=>{setMobi(e.target.value)}}/> */}
                    {/* <input type="text" maxlength="10" 
                   pattern="\d{10}"  style={{backgroundColor:"transparent", border:'1px solid #d8d8d8' , borderTopRightRadius:"8px" , borderBottomRightRadius:"8px" , borderLeft:"none" , }} placeholder='Mobile Number'/> */}
                  </InputGroup>
                {/* </div> */}
                 
              </div>
              <div style={{marginTop:'15px'}}>
                  <Text width='90%' margin='auto' color='#9e99a0'>Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</Text>
              </div>
              
              <Link to={'/otp'} >
                <Button backgroundColor='black' color='white' marginTop='20px' variant='solid' _hover={'black'} disabled={!mobi}>SEND ME OTP</Button></Link>
              
              <Divider borderColor={'grey'} width='90%' margin='auto' marginTop='20px'/>

               <label>
                <input type="checkbox" checked='true'  style={{accentColor:'black'}}/> Get important updates on Whatsapp
                <span style={{color:"#fc2f92"}}> Terms and Conditions</span>
              </label>
              {/* <Checkbox defaultChecked >Get important updates on Whatsapp <span color="green">Terms and Conditions</span></Checkbox> */}

              <Text width='90%' margin='auto' marginTop='5px' align={'right'}>Need Help?<span style={{color:"#fc2f92"}}> Contact Us</span></Text>

              <Divider borderColor={'grey'} width='90%' margin='auto' marginTop='10px'/>
              
              <Text width='90%' margin='auto' >By Signing up or logging in, you agree to our<span style={{color:"#fc2f92"}}> Terms and Conditions</span></Text>

        </div>
      </div>
    )
  };
  
export default Login;
  
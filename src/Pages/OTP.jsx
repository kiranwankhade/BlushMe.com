import { Button ,Divider,Text ,PinInput,PinInputField,HStack, Input, AlertTitle,Alert,AlertIcon,AlertDescription} from "@chakra-ui/react";
 
import { Link,useNavigate } from "react-router-dom";

import {FaAngleRight} from "react-icons/fa"
import { useState } from "react";

function OTP(){

    const [otp,setOtp] = useState("")

    const [alertMessage,setAlertMessage] = useState("")

    const [color,setColor] = useState("")

    const navigate = useNavigate();

    const handleSubmit = () =>{
        console.log("otp",otp)
        if(otp === "1234"){
            setAlertMessage("login Successfully");
            setColor("green")
            navigate("/")
        }else{
            setAlertMessage("Given otp is wrong");
            setColor("red")
        }
    }

    // const handleChange = (e) => {
    //    setOtp(e)
    //    console.log("handlchange",e)
    // }

    return (
    <div>
        
        <div style={{marginTop:'10px' , display:"flex", flexDirection:'row' , gap:'8px' ,  marginLeft:'50px' , alignItems:'center'}} >
          <Link to='/'><Text color={'#7c7c7c'}>Home</Text></Link>
          <FaAngleRight style={{color:"#7c7c7c"}}/>
          <Text fontWeight={600}>OTP</Text>
        </div>
        <Text fontSize={28} fontWeight={500} color={'#916228'}>One Time Password</Text>

        <div style={{width:'80%' , margin:'auto'}}>
            <Text fontSize={20} color={'#292929'} marginTop='15px'>Check Your Message For The OTP.</Text>
            <Text fontSize={18} color={'#292929'} marginRight='140px'>One Time Password</Text>
            <HStack marginTop={'20px'} marginLeft={'460px'}>
                    <PinInput onComplete={(e)=>  setOtp(e)}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
            </HStack>
            <Text fontSize={20} marginTop={2} color={color}>{alertMessage}</Text>
            <p style={{width:'30%', margin:'auto', marginTop:'20px'}}>By tapping Submit,you agree to our <span style={{color:"blue"}}>Privacy Policy</span> and <span  style={{color:"red"}}> Terms & Conditions</span></p>

            <Button width={'150px'} backgroundColor='black' color='white' marginTop='20px' variant='solid' _hover={'black'} onClick={handleSubmit}>SUBMIT</Button>
        </div>
        
         {/* <Input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="4"
            type="password" /> */}
    </div>
    );
}

export default OTP;
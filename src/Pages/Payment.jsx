import { 
    Flex,
    Text,
    Input,
    Button,
    Image,
    Box,
    FormLabel,
    FormControl,
    FormHelperText,
    Select,
    Checkbox
    
 } from "@chakra-ui/react";
import { Link } from "react-router-dom";

 

export default function Payment() {

    let totalPrice =  JSON.parse(localStorage.getItem("priceTotal")) || "";
    console.log("totalPrice",totalPrice)
 

    return (
        <div style={{width:'80%' , margin:'auto' ,marginTop:"20px"}}>
            <Text  fontSize={25} fontWeight={600} marginBottom={10}>PAYMENT</Text>
            <Flex gap={10} marginTop={10} w='80%' margin={'auto'}>
                <Flex flexDirection={'column'} justifyContent='justify'>
                    <Text textAlign={'justify'} fontSize={20}>Price Details</Text>
                    <Text textAlign={'justify'} fontSize={20}>Total-items: {totalPrice.totalItems}</Text>
                    <Text textAlign={'justify'} fontSize={20}>Total Price : {totalPrice.total}</Text>

                    <Flex marginTop={10} flexDirection={'row'} gap={5}>
                        <Image src='https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg' alt='paymentImg' />
                        <Image src='https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg' alt='paymentImg' />
                        <Image src='https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg' alt='paymentImg' />
                        <Image src='https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg' alt='paymentImg' />
                    </Flex>
                </Flex>
               

               <Box>
                    <Text color={'pink.500'} textAlign={'justify'} fontWeight={500} fontSize={20}>Card Details</Text>
                    <FormControl w='500px' isRequired>
                        <FormLabel>Card Number</FormLabel>
                        <Input w={'100%'} borderColor={'gray.400'} type='text'  maxlength="13" minLength='13' placeholder="Enter your Card Number"  />
                        <FormHelperText textAlign={'justify'}>We'll never share your Card Number.</FormHelperText>

                        <FormLabel marginTop={5}>Name on Card</FormLabel>
                        <Input w={'100%'} borderColor={'gray.400'} type='text' placeholder="Enter your full Name on Card "  />

                        <FormLabel marginTop={5}>Expiry Date</FormLabel>
                        <Flex flexDirection={'row'} gap={5}>
                            <Select placeholder='Month'>
                                <option value='option1'>January</option>
                                <option value='option2'>February</option>
                                <option value='option3'>March</option>
                                <option value='option4'>April</option>
                                <option value='option5'>May</option>
                                <option value='option6'>June</option>
                                <option value='option7'>July</option>
                                <option value='option8'>August</option>
                                <option value='option9'>September</option>
                                <option value='option10'>October</option>
                                <option value='option11'>November</option>
                                <option value='option12'>December</option>
                            </Select>

                            <Select placeholder='Year'>
                                <option value='option1'>2020</option>
                                <option value='option2'>2021</option>
                                <option value='option3'>2022</option>
                                <option value='option4'>2023</option>
                                <option value='option5'>2024</option>
                            </Select>
                            
                            <Input w={'100%'} borderColor={'gray.400'} type='text' placeholder="Enter your CVV "   maxlength="3" minLength='3'/>

                        </Flex>

                        <FormLabel marginTop={5}>Billing Zip Code</FormLabel>
                        <Input w={'100%'} borderColor={'gray.400'} type='text' placeholder="Enter your Billing Zip Code* "  />
                        
                        <Text textAlign={'justify'}>
                            <Checkbox marginTop={5} colorScheme='green' defaultChecked>
                            Remember this card for future use
                            </Checkbox>
                        </Text>

                        <Link to={"/"}><Button
                                type="submit"
                                loadingText="Submitting"
                                size='md'
                                height='48px'
                                width='200px'
                                bg={'#fb3380'}
                                color={'white'}
                                _hover={{
                                bg: '#fb3380',
                                }}
                                marginTop="20px">
                            SUBMIT
                        </Button></Link>
                        
                    </FormControl>
                </Box>
            </Flex>
        </div>
    )
}
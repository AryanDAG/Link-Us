import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, Show, VStack } from '@chakra-ui/react'

const SignUp = () => {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState()
    const [pic, setpic] = useState()
    const [Show, setShow] = useState(false)

        const handleCLick =()=> setShow(!Show)

        const postDetails = (pics) =>{};
        const submitHandler = () =>{};



    return (
        <VStack spacing="5px" color='black' >SignUp
            <FormControl id='first-name' isRequired >
                <FormLabel> Name </FormLabel>
                <Input
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id='email' isRequired >
                <FormLabel> Email </FormLabel>
                <Input
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired >
                <FormLabel> Password </FormLabel>
                <InputGroup>
                <Input
                    type={ Show ? "text" : "password"}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleCLick} >
                        {Show ? "hide" : "show"  }

                    </Button>


                </InputRightElement>
                
                </InputGroup>





            </FormControl>
            <FormControl id='confirmpassword' isRequired >
                <FormLabel> Confirm Password </FormLabel>
                <InputGroup>
                <Input
                    type={ Show ? "text" : "password"}
                    placeholder='Enter your Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleCLick} >
                        {Show ? "hide" : "show"  }

                    </Button>


                </InputRightElement>
                </InputGroup>
            </FormControl>







            <FormControl id='pic' >
                <FormLabel> Upload Your picture </FormLabel>
                <Input
                    type='file'
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>





                <Button
                colorScheme='blue'
                width="100%"
                style={{margin:15}}
                onClick={submitHandler}>
                
                Sign Up

                </Button>



        </VStack>
    )

}

export default SignUp
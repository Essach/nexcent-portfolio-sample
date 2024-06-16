import { Button, Flex, Image, Text } from "@chakra-ui/react";
import logo from '../assets/images/Logo.png'
const Navbar = () => {
    return (
        <Flex px='144px' bg={'brandSilver'} py='22px' alignItems={'center'} justifyContent={'space-between'}>
            <Image src={logo} _hover={{cursor:'pointer'}} />
            <Flex gap={'50px'}>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    Home
                </Text>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    Service
                </Text>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    Feature
                </Text>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    Product
                </Text>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    Testimonial
                </Text>
                <Text fontSize={'md'} fontWeight='medium' color='secondary' _hover={{cursor: 'pointer'}}>
                    FAQ
                </Text>
            </Flex>
            <Flex>
                <Button variant='tertiary' size='md'>Login</Button>
                <Button variant='primary' size='md'>Sign up</Button>
            </Flex>
        </Flex>
    );
}

export default Navbar;
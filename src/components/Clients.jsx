import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo1 from '../assets/images/1.png';
import logo2 from '../assets/images/2.png';
import logo3 from '../assets/images/3.png';
import logo4 from '../assets/images/4.png';
import logo5 from '../assets/images/5.png';
import logo6 from '../assets/images/6.png';
import logo7 from '../assets/images/7.png';

const Clients = () => {
    return (
        <Flex direction={'column'} w='100%' justify={'center'} align={'center'} px={['72px', '72px', '72px', '144px']} py='40px'>
            <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']}>Our Clients</Heading>
            <Text mt='5px' color='brandGrey' fontSize={['md', 'lg']}>We have been working with some Fortune 500+ clients</Text>
            <Flex mt='15px' py='25px' justify={'space-around'} w='100%'>
                <Image src={logo1} />
                <Image src={logo2} />
                <Image src={logo3} />
                <Image src={logo4} />
                <Image src={logo5} />
                <Image src={logo6} />
                <Image src={logo7} />
            </Flex>
        </Flex>
    );
}
 
export default Clients;
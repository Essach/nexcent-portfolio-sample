import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image1 from '../assets/images/manage1.png';
import image2 from '../assets/images/manage2.png';
import image3 from '../assets/images/manage3.png';

const Manage = () => {
    return (
        <Flex direction={'column'} w='100%' justify={'center'} align={'center'} px={['72px', '72px', '72px', '144px']} py='40px'>
            <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']} w={['100%','100%','45%']} textAlign={'center'}>Manage your entire community in a single system</Heading>
            <Text mt='5px' color='brandGrey' fontSize={['md', 'lg']}>Who is Nexcent suitable for?
            </Text>
            <Flex mt='18px' w='100%' justify={'space-around'} direction={['column','column','row']} alignItems={['center','center','normal']}>
                <Box w={['100%', '70%', '300px']} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} boxShadow={'sm'} p='24px 32px'>
                    <Image src={image1} />
                    <Heading fontSize={['md', 'xl', '2xl']} color={'brandD_Grey'} textAlign={'center'} mt='18px'>Membership Organizations</Heading>
                    <Text color='brandGrey' textAlign={'center'} fontSize={['sm', 'md']} mt='5px'>Our membership management software provides full automation of membership renewals and payments</Text>
                </Box>
                <Box w={['100%', '70%', '300px']} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} boxShadow={'sm'} p='24px 32px'>
                    <Image src={image2} />
                    <Heading fontSize={['md', 'xl', '2xl']} color={'brandD_Grey'} textAlign={'center'} mt='18px'>National Associations</Heading>
                    <Text color='brandGrey' textAlign={'center'} fontSize={['sm', 'md']} mt='5px'>Our membership management software provides full automation of membership renewals and payments</Text>
                </Box>
                <Box w={['100%', '70%', '300px']} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} boxShadow={'sm'} p='24px 32px'>
                    <Image src={image3} />
                    <Heading fontSize={['md', 'xl', '2xl']} color={'brandD_Grey'} textAlign={'center'} mt='18px'>Clubs And Groups</Heading>
                    <Text color='brandGrey' textAlign={'center'} fontSize={['sm', 'md']} mt='5px'>Our membership management software provides full automation of membership renewals and payments</Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Manage
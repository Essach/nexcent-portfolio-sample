import { Box, Flex, Grid, Heading, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import logo from '../assets/images/LogoWhite.png';
import insta from '../assets/icons/insta.png'
import basket from '../assets/icons/basket.png'
import twitter from '../assets/icons/twitter.png'
import yt from '../assets/icons/yt.png'
import send from '../assets/icons/send.png'


const Footer = () => {
    return (
        <Grid templateColumns={['1fr','1fr','5fr 7fr']} bg='brandBlack' px={['72px', '72px', '72px', '144px']} py='64px' gap={['64px','64px','0']}>
            <Flex direction={'column'} justifyContent={'space-between'} gap='32px' align={['center','center','normal']}>
                <Box>
                    <Image src={logo} />
                </Box>
                <Box>
                    <Text fontSize={'sm'} color='silver' lineHeight={'sm'}>
                        Copyright © 2020 Nexcent ltd.
                    </Text>
                    <Text fontSize={'sm'} color='silver' lineHeight={'sm'}>
                        All rights reserved.
                    </Text>
                </Box>
                <Flex gap='16px'>
                    <Image src={insta} _hover={{cursor: 'pointer'}} />
                    <Image src={basket}   _hover={{cursor: 'pointer'}} />
                    <Image src={twitter}  _hover={{cursor: 'pointer'}} />
                    <Image src={yt}  _hover={{cursor: 'pointer'}} />
                </Flex>
            </Flex>
            <SimpleGrid columns={3}>
                <Box>
                    <Heading fontSize={['md', 'xl']} color='white'>Company</Heading>
                    <Flex direction={'column'} gap='12px' mt='24px'>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            About us
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Blog
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Contact us
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Pricing
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Testimonials
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Heading fontSize={['md', 'xl']} color='white'>Support</Heading>
                    <Flex direction={'column'} mt='24px' gap='12px'>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Help center
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Terms of service
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Legal
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Privacy policy
                        </Text>
                        <Text fontSize={['md', 'xl']} color='brandSilver'  _hover={{cursor: 'pointer'}} >
                            Status
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Heading fontSize={['md', 'xl']} color='white'>Stay up to date</Heading>
                    <Flex mt='24px' >
                        <Input placeholder="Your email address" size='lg' borderRadius={'15px 0 0 15px'} border='none' bg='rgba(255,255,255,0.2)' color='white' _placeholder={{color: 'white'}} fontSize={'md'}/>
                        <Flex h='3rem' w='3rem' borderRadius={'0 15px 15px 0'} bg='rgba(255,255,255,0.2)' alignItems={'center'} justifyContent={'center'}>
                            <Image src={send}/>
                        </Flex>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Grid>
    );
}

export default Footer;
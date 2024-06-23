import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import illustration from '../assets/images/Illustration.png'
const Home = () => {
    return (
        <Grid templateColumns={['1fr', '1fr', '7fr 5fr']} px={['72px', '72px', '72px', '144px']} bg='brandSilver' flexGrow={1} alignItems={'center'} id='Home'>
            <Box py={'5rem'}>
                <Box>
                    <Box>
                        <Heading size={['lg', 'xl', '2xl', '3xl', '4xl']} color='brandD_Grey' whiteSpace='nowrap' lineHeight={['lg', 'xl', '2xl', '4xl']}>Lessons and insights</Heading>
                        <Heading size={['lg', 'xl', '2xl', '3xl', '4xl']} lineHeight={['lg', 'xl', '2xl', '4xl']} color='primary'>from 8 years</Heading>
                    </Box>
                    <Text color='brandGrey' mt='16px' fontSize='md'>Where to grow your business as a photographer: site or social media?</Text>
                </Box>
                <Button variant={'primary'} mt='32px' size='lg'>Register</Button>
            </Box>
            <Flex justifyContent={['center','center','start']}>
                <Image src={illustration} flexGrow={[0,0,1]} />
            </Flex>
            <GridItem colSpan={[1,1,2]} display={'flex'} justifyContent={'center'} h='100%' alignItems={'end'} pb='25px'>
                <Flex gap='10px'>
                    <Box h='10px' w='10px' borderRadius='50%' bg='primary'></Box>
                    <Box h='10px' w='10px' borderRadius='50%' bg='primary'  opacity='0.3'></Box>
                    <Box h='10px' w='10px' borderRadius='50%' bg='primary'  opacity='0.3'></Box>
                </Flex>
            </GridItem>
        </Grid>
    );
}

export default Home
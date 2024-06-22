import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import illustration from '../assets/images/Frame3.png';

const Section6 = () => {
    return (    
        <Grid templateColumns={'5fr 6fr'} px={['72px', '72px', '72px', '144px']} alignItems={'center'}>
            <Image src={illustration} objectFit={'cover'} w='100%'/>
            <Box pr='144px'>
                <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']}>How to design your site footer like we did</Heading>
                <Text color='brandGrey' fontSize={['md', 'lg']} mt='16px'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</Text>
                <Button variant='primary' size={['md','lg']} mt='32px'>Learn More</Button>
            </Box>
        </Grid>
    );
}

export default Section6; 
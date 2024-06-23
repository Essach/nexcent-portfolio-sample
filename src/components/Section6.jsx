import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import illustration from '../assets/images/Frame3.png';

const Section6 = () => {
    return (    
        <Grid templateColumns={['1fr','1fr','5fr 6fr']} px={['72px', '72px', '72px', '144px']} alignItems={'center'} id="Feature">
            <Image src={illustration} objectFit={'cover'} w='100%'/>
            <Flex pr={['0','0','144px']} direction={['column','column','column']} align={['center','center','flex-start']}>
                <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']} textAlign={['center','center','left']}>How to design your site footer like we did</Heading>
                <Text color='brandGrey' fontSize={['md', 'lg']} mt='16px' textAlign={['center','center','left']}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</Text>
                <Button variant='primary' size={['md','lg']} mt='32px'>Learn More</Button>
            </Flex>
        </Grid>
    );
}

export default Section6; 
import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import illustration from '../assets/images/Frame2.png';

const Section4 = () => {
    return (    
        <Grid templateColumns={'5fr 6fr'} px={['72px', '72px', '72px', '144px']} alignItems={'center'}>
            <Image src={illustration} objectFit={'cover'} w='100%'/>
            <Box pr='144px'>
                <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']}>The unseen of spending three years at Pixelgrade</Heading>
                <Text color='brandGrey' fontSize={['md', 'lg']} mt='16px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Text>
                <Button variant='primary' size={['md','lg']} mt='32px'>Learn More</Button>
            </Box>
        </Grid>
    );
}

export default Section4; 
import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import illustration from '../assets/images/Frame2.png';

const Section4 = () => {
    return (    
        <Grid templateColumns={['1fr','1fr','5fr 6fr']} px={['72px', '72px', '72px', '144px']} alignItems={'center'} id='Product'>
            <Image src={illustration} objectFit={'cover'} w='100%'/>
            <Flex pr={['0', '0','144px']} direction={'column'} alignItems={['center', 'center', 'flex-start']}>
                <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']} textAlign={['center', 'center', 'left']}>The unseen of spending three years at Pixelgrade</Heading>
                <Text color='brandGrey' fontSize={['md', 'lg']} mt='16px' textAlign={['center', 'center', 'left']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Text>
                <Button variant='primary' size={['md','lg']} mt='32px'>Learn More</Button>
            </Flex>
        </Grid>
    );
}

export default Section4; 
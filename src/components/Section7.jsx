import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import tesla from '../assets/images/tesla.png';
import logo1 from '../assets/images/1colored.png';
import logo2 from '../assets/images/2.png';
import logo3 from '../assets/images/3.png';
import logo4 from '../assets/images/4.png';
import logo5 from '../assets/images/5.png';
import logo6 from '../assets/images/6.png';
import right from '../assets/icons/right.png';

const Section7 = () => {
    return (
        <Grid templateColumns={'4fr 7fr'} px={['72px', '72px', '72px', '144px']} alignItems={'center'} my='48px' bg='brandSilver' py='64px' gap={'144px'}>
            <Image src={tesla} w='100%' objectFit='cover' aspectRatio={1 / 1} borderRadius={'15px'}/>
            <Box>
                <Text color='brandGrey' fontSize={['md', 'lg']}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</Text>
                <Box mt='15px'>
                    <Heading fontSize={'xl'} lineHeight={'2xl'} color='primary'>
                        Tim Smith
                    </Heading>
                    <Text color='brandL_Grey' fontSize={['md', 'lg']}>
                        British Dragon Boat Racing Association
                    </Text>
                </Box>
                <Flex mt='32px'>
                    <Flex gap='40px' align={'center'}>
                        <Image src={logo1} />
                        <Image src={logo2} />
                        <Image src={logo3} />
                        <Image src={logo4} />
                        <Image src={logo5} />
                        <Image src={logo6} />
                    </Flex>
                    <Button variant={'tertiary'}  size={['md','lg']} gap='5px'>
                        <Heading fontSize={'lg'}>Meet all customers</Heading>
                        <Image src={right} />
                    </Button>
                </Flex>
            </Box>
        </Grid>
    );
}

export default Section7;
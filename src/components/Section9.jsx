import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import right from '../assets/icons/rightWhite.png';
const Section9 = () => {
    return (
        <Flex justify={'center'} align={'center'} gap='32px' direction={'column'} py='32px' bg='brandSilver'>
            <Heading color='brandBlack' fontSize={['xl', '3xl', '4xl']} textAlign={'center'}>Pellentesque suscipit fringilla libero eu.</Heading>
            <Button variant='primary' size={['md','lg']} gap='5px'>
                Get a Demo
                <Image src={right} />
            </Button>
        </Flex>
    ) ;
}

export default Section9;
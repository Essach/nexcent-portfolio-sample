import { Box, Flex, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import icon1 from '../assets/icons/Icon.png';
import icon2 from '../assets/icons/Icon2.png';
import icon3 from '../assets/icons/Icon3.png';
import icon4 from '../assets/icons/Icon4.png';
const Section5 = () => {
    return (
        <Grid templateColumns={['1fr','1fr','5fr 6fr']} px={['72px', '72px', '72px', '144px']} alignItems={'center'} my='48px' bg='brandSilver' py='64px'>
            <Box>
                <Box>
                    <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']}  lineHeight={['xl','xl','3xl']} textAlign={['center','center','left']}>Helping a local</Heading>
                    <Heading color='primary' fontSize={['lg', '2xl', '3xl']} lineHeight={['xl','xl','3xl']}  textAlign={['center','center','left']}>business reinvent itself</Heading>
                </Box>
                <Text color='brandGrey' fontSize={['md', 'lg']} mt='8px' textAlign={['center','center','left']}> 
                    We reached here with our hard work and dedication
                </Text>
            </Box>
            <SimpleGrid columns={2} rowGap={'40px'} columnGap={'36px'} mt={['20px', '20px', '0']}>
                <Flex align={'center'} gap='16px' justify={['center','center','left']}>
                    <Image src={icon1} />
                    <Box>
                        <Heading color='brandD_Grey' fontSize={'2xl'} lineHeight={'2xl'}>2,245,341</Heading>
                        <Text color='brandGrey' fontSize={'md'} lineHeight={'md'}>Members</Text>
                    </Box>
                </Flex>
                <Flex align={'center'} gap='16px' justify={['center','center','left']}>
                    <Image src={icon2} />
                    <Box>
                        <Heading color='brandD_Grey' fontSize={'2xl'} lineHeight={'2xl'}>2,245,341</Heading>
                        <Text color='brandGrey' fontSize={'md'} lineHeight={'md'}>Members</Text>
                    </Box>
                </Flex>
                <Flex align={'center'} gap='16px' justify={['center','center','left']}>
                    <Image src={icon3} />
                    <Box>
                        <Heading color='brandD_Grey' fontSize={'2xl'} lineHeight={'2xl'}>2,245,341</Heading>
                        <Text color='brandGrey' fontSize={'md'} lineHeight={'md'}>Members</Text>
                    </Box>
                </Flex>
                <Flex align={'center'} gap='16px' justify={['center','center','left']}>
                    <Image src={icon4} />
                    <Box>
                        <Heading color='brandD_Grey' fontSize={'2xl'} lineHeight={'2xl'}>2,245,341</Heading>
                        <Text color='brandGrey' fontSize={'md'} lineHeight={'md'}>Members</Text>
                    </Box>
                </Flex>
            </SimpleGrid>
        </Grid>
    );
}

export default Section5;
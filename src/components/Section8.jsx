import { Box, Button, Card, CardBody, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';
import right from '../assets/icons/right.png';

const Section8 = () => {
    return (
        <Flex px={['72px', '72px', '72px', '144px']} w='100%' direction={'column'} alignItems={'center'} id="FAQ">
            <Heading color='brandD_Grey' fontSize={['lg', '2xl', '3xl']} textAlign={'center'}>
                Caring is the new marketing
            </Heading>
            <Text textAlign={'center'} width={['100%','100%','50%']} color='brandGrey' fontSize={['md', 'lg']} mt='16px'>{`The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.`}</Text>
            <SimpleGrid mt='16px' columns={[1,1,3]} gap='35px'>
                <Box borderRadius={'15px'} display={'flex'} flexDirection='column' alignItems={'center'} position={'relative'}>
                    <Image src={photo1} w='100%'/>
                    <Card bg='brandSilver' w='90%' display={'flex'} alignItems={'center'} pt='16px' transform={'translateY(-50%)'} shadow={'md'}>
                        <CardBody display={'flex'} alignItems={'center'} flexDir={'column'}>
                            <Heading fontSize={'xl'} color='brandGrey' textAlign={'center'}>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </Heading>
                            <Button variant={'tertiary'} size={['md','lg']} gap='5px' mt='16px'>
                                <Heading fontSize={'lg'}>Read more</Heading>
                                <Image src={right} />
                            </Button>
                        </CardBody>
                    </Card>
                </Box>
                <Box borderRadius={'15px'} display={'flex'} flexDirection='column' alignItems={'center'} position={'relative'}>
                    <Image src={photo2} w='100%'/>
                    <Card bg='brandSilver' w='90%' display={'flex'} alignItems={'center'} pt='16px' transform={'translateY(-50%)'} shadow={'md'}>
                        <CardBody display={'flex'} alignItems={'center'} flexDir={'column'}>
                            <Heading fontSize={'xl'} color='brandGrey' textAlign={'center'}>
                                What are your safeguarding responsibilities and how can you manage them?
                            </Heading>
                            <Button variant={'tertiary'} size={['md','lg']} gap='5px' mt='16px'>
                                <Heading fontSize={'lg'}>Read more</Heading>
                                <Image src={right} />
                            </Button>
                        </CardBody>
                    </Card>
                </Box>
                <Box borderRadius={'15px'} display={'flex'} flexDirection='column' alignItems={'center'} position={'relative'}>
                    <Image src={photo3} w='100%'/>
                    <Card bg='brandSilver' w='90%' display={'flex'} alignItems={'center'} pt='16px' transform={'translateY(-50%)'} shadow={'md'}>
                        <CardBody display={'flex'} alignItems={'center'} flexDir={'column'}>
                            <Heading fontSize={'xl'} color='brandGrey' textAlign={'center'}>
                                Revamping the Membership Model with Triathlon Australia
                            </Heading>
                            <Button variant={'tertiary'} size={['md','lg']} gap='5px' mt='16px'>
                                <Heading fontSize={'lg'}>Read more</Heading>
                                <Image src={right} />
                            </Button>
                        </CardBody>
                    </Card>
                </Box>
            </SimpleGrid>
        </Flex>
    );
}

export default Section8;
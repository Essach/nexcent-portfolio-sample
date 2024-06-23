import { Button, Drawer, DrawerContent, DrawerOverlay, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import logo from '../assets/images/Logo.png'
import menu from '../assets/icons/menu.png';
import { useRef } from "react";
import logoWhite from '../assets/images/LogoWhite.png';
import { Link } from "react-scroll";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Flex px={['18px', '36px', '72px', '144px']} bg={'brandSilver'} py='22px' alignItems={'center'} justifyContent={'space-between'}>
                <Flex gap={'20px'}>
                    <Image src={menu} _hover={{ cursor: 'pointer' }} display={['block', 'block', 'none']} ref={btnRef} onClick={onOpen}/>
                    <Image src={logo} _hover={{cursor:'pointer'}} />
                </Flex>
                <Flex gap={['10px', '25px', '25px', '50px']} display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map(element => (<Link key={element} to={element} smooth={true} duration={500} offset={-100}>
                        <Text _hover={{ cursor:'pointer'}} fontSize='md' fontWeight='medium' color='secondary'>
                        {element}
                        </Text>
                    </Link>))}
                </Flex>
                <Flex>
                    <Button variant='tertiary' size='md'>Login</Button>
                    <Button variant='primary' size='md'>Sign up</Button>
                </Flex>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                display={['block', 'block', 'none']}
            >
                <DrawerOverlay />
                <DrawerContent bg='secondary' display={'flex'} flexDirection={'column'} p='35px 100px 35px 30px' gap={'50px'}>
                    <Image src={logoWhite} />
                    <Flex gap={['10px', '25px', '25px', '50px']} direction={'column'} pl='20px'>
                        {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map(element => (<Link key={element} to={element} smooth={true} duration={500} offset={-100} onClick={onClose}>
                            <Text fontSize='2xl' fontWeight='medium' color='white' _hover={{ cursor: 'pointer' }}>
                                {element}
                            </Text>
                    </Link>))}
                    
                </Flex>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navbar;
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    // DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button, useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure();
  return (
    <>
    <Button
    pos={'fixed'}
    top={'1rem'}
    left={'1rem'}
    colorScheme={'telegram'}
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'50%'}
    zIndex={"overlay"}
    onClick={onOpen}
    >
        <BiMenuAltLeft size={'30'}/>
    </Button>
    <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
    <DrawerContent >
    <DrawerHeader>VIDEO HUB</DrawerHeader>
    <DrawerBody>
        <VStack alignItems={'start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
            <Link to={'/videos'}>Videos</Link>
        </Button>
        <Button  onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
            <Link to={'/videos?category=free'}>Free Videos</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
            <Link to={'/upload'}>Upload Video</Link>
        </Button>
        </VStack>
        <HStack pos={'absolute'} bottom={"10"} left={"0"}
        w={'full'}
        justifyContent={'space-evenly'}>
        <Button onClick={onClose} colorScheme={'telegram'}>
            <Link to={'/login'}>Login</Link>
        </Button>
        <Button onClick={onClose} colorScheme={'telegram'}variant={'outline'}>
            <Link to={'/signup'}>Signup</Link>
        </Button>
        </HStack>
    </DrawerBody>
    <DrawerCloseButton />
    </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
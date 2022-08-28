import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, TriangleDownIcon, LockIcon } from '@chakra-ui/icons';

const Links = ['WORKOUTS', 'PROGRAMS', 'HEALTHY LIVING' ,'COMMUNITY','ABOUT','STORE','MEMBERSHIP'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box p={8} width='100%' bg={useColorModeValue('white.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>
              <Avatar size={'2xl'} src='https://smartinwi.com/wp-content/uploads/2020/09/fitness-blender.jpg'></Avatar>
            </Box> */}
            <Box>
  <Image boxSize='120px' src='https://smartinwi.com/wp-content/uploads/2020/09/fitness-blender.jpg' alt='logo' />
</Box>
            <HStack
            fontSize='0.8em'
            fontWeight="bold"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Box>
                <Box color="teal.400">Hi Sign In</Box>
                <Box>MY FITNESS  </Box>
              </Box>
            </HStack>
          </HStack>
          <Spacer></Spacer>
          <Flex alignItems={'center'} justifyContent={'space-between'}>

                <Icon mr={5} ml={5} as={SearchIcon} />
                
                <Icon as={LockIcon} />

                
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>

    </>
  );
}
'use client';

import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Links = ['Home', 'About', 'Work', 'Contact'];

const NavLink = ({ to, children }) => (
  <Link as={NextLink} px={2} py={1} color="white" fontWeight="500" rounded="md" href={to}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="teal.800" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color="white" fontWeight="bold" fontSize="2xl">
            Manoj Nagpure
          </Box>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                >
                {link}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
              <NavLink
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                >
                {link}
              </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}

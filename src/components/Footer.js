'use client';

import { Box, Container, Stack, Text, IconButton, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box bg="gray.900" color="white" py={6}>
      <Container maxW="6xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Text fontSize="sm" mb={{ base: 4, md: 0 }}>
            © {new Date().getFullYear()} Manoj Nagpure. All rights reserved.
          </Text>

          <Stack direction="row" spacing={4}>
            <IconButton
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              size="lg"
              color="teal.200"
              _hover={{ color: 'teal.300' }}
            />
            <IconButton
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              size="lg"
              color="teal.200"
              _hover={{ color: 'teal.300' }}
            />
            <IconButton
              as="a"
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              size="lg"
              color="teal.200"
              _hover={{ color: 'teal.300' }}
            />
            <IconButton
              as="a"
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              size="lg"
              color="teal.200"
              _hover={{ color: 'teal.300' }}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

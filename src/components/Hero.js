'use client';

import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Box bg="gray.900" color="white" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
        >
          <Stack spacing={6} flex="1" mb={{ base: 10, md: 0 }}>
            <Heading
                as="h1"
                size="2xl"
                marginLeft="20px"
                lineHeight="short"
                bgGradient="linear(to-r, orange.300, green.800)"
                bgClip="text"
                >
                Hey, I&apos;m <br /> Manoj Nagpure
            </Heading>

            <Text fontSize="xl" fontWeight="500" p="0px 20px" color="gray.300">
              I'm a Front-End Web Developer with a strong focus on creating modern, responsive, and accessible web interfaces.
            </Text>
            <Button
              as={NextLink}
              href="/work"
              marginLeft="20px"
              bg="white"
              boxShadow="0px 0px 10px white"
              color="indigo"
              size="lg"
              width="50%"
            >
              View My Work
            </Button>
          </Stack>

          <Box flex="1" display={{ base: 'none', md: 'block' }}>
            <Image
              src="./manoj.jpg"
              alt="Hero Image"
              borderRadius="md"
              height="400px"
              width="350px"
              marginLeft="100px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

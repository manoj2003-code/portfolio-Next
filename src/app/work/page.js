'use client';

import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WorkPage() {
  
  const projects = [
    {
      title: 'E-Commerce Website',
      image: '/project1.jpg',
      description: 'A responsive online store built with Next.js and Chakra UI, featuring cart and checkout.',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      image: '/project2.jpg',
      description: 'My personal portfolio site to showcase projects and skills, built with Next.js and Tailwind CSS.',
      link: '#',
    },
    {
      title: 'Blog Platform',
      image: '/project3.jpg',
      description: 'A modern blogging platform with markdown support and user authentication.',
      link: '#',
    },
  ];
  
  return (
    <>
    <Navbar />
    <Box bg="gray.900" color="gray.100" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        {/* Heading */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, teal.300, green.400)"
            bgClip="text"
          >
            My Work
          </Heading>
          <Text maxW="2xl" color="gray.400">
            {`Here are some of the projects I've worked on recently. I love creating beautiful and functional web applications.`}
          </Text>

        </VStack>

        {/* Projects Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="gray.800"
              rounded="md"
              overflow="hidden"
              boxShadow = "0px  0px 5px aqua"
              _hover={{ boxShadow: 'xl', transform: 'scale(1.02)', transition: 'all 0.3s ease' }}
              transition="all 0.3s ease"
            >
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2} color="teal.300">
                  {project.title}
                </Heading>
                <Text mb={4} color="gray.400">
                  {project.description}
                </Text>
                <Stack direction="row">
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    size="sm"
                    colorScheme="teal"
                    variant="outline"
                  >
                    View Project
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    <Box width="100%" h="2px" backgroundColor="gray.600"></Box>
    <Footer />
    </>
  );
  
}

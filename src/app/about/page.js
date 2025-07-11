'use client';

import React from 'react';
import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, IconButton, Stack, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Motion component
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    motion.div.propTypes?.includes(prop) || shouldForwardProp(prop),
});

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <Box bg="gray.900" color="gray.100" py={{ base: 10, md: 20 }}>
      <Container maxW="4xl">
        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            mb={8}
            bgGradient="linear(to-r, teal.300, green.400)"
            bgClip="text"
          >
            About Me
          </Heading>
        </MotionBox>

        {/* Profile & Intro */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VStack spacing={6} align="center" textAlign="center">
            <Image
              borderRadius="full"
              w="165px"
              h="175px"
              src="/about.jpg"
              alt="Manoj Nagpure"
              objectFit="cover"
              boxShadow="0px 0px 15px aqua"
              // border="4px solid teal"
            />

            <Text fontSize="lg" maxW="2xl" color="gray.300">
              Hi! I'm Manoj Nagpure, a Front-End Web Developer passionate about building beautiful,
              responsive, and user-friendly websites. I specialize in React, Next.js, Chakra UI,
              and Tailwind CSS to deliver high-quality digital experiences.
            </Text>

            {/* Social Icons */}
            <Stack direction="row" spacing={4} pt={2}>
              <IconButton
                as="a"
                href="https://github.com/yourusername"
                target="_blank"
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                color="teal.300"
                _hover={{ color: 'teal.400' }}
              />
              <IconButton
                as="a"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                color="teal.300"
                _hover={{ color: 'teal.400' }}
              />
              <IconButton
                as="a"
                href="https://twitter.com/yourusername"
                target="_blank"
                icon={<FaTwitter />}
                aria-label="Twitter"
                variant="ghost"
                color="teal.300"
                _hover={{ color: 'teal.400' }}
              />
              <IconButton
                as="a"
                href="https://instagram.com/yourusername"
                target="_blank"
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="ghost"
                color="teal.300"
                _hover={{ color: 'teal.400' }}
              />
            </Stack>
          </VStack>
        </MotionBox>

        {/* Highlights Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Heading as="h1" size="lg" mt={16} mb={6} textAlign="center">
            Highlights
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }}  spacing={6}>
            {[
              {
                title: 'Front-End Development',
                desc: 'Building responsive, accessible UIs with React and Next.js.',
                
              },
              {
                title: 'UI/UX Design',
                desc: 'Clean, intuitive interfaces using Chakra UI and Tailwind CSS.',
              },
              {
                title: 'Continuous Learning',
                desc: 'Staying updated with latest web technologies and trends.',
              },
              {
                title: 'SEO Optimization',
                desc: 'Ensuring performance and discoverability across all devices.',
              },
              {
                title: 'Version Control',
                desc: 'Using Git and GitHub for collaboration and version tracking.',
              },
              {
                title: 'Team Collaboration',
                desc: 'Experience working with remote teams using Agile workflows.',
              },
            ].map((item, i) => (
              <MotionBox
                key={i}
                bg="gray.800"
                p={8}
                rounded="md"
                boxShadow="0px 0px 2px aqua"
                textAlign="center"
                // _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                _hover={{ boxShadow: 'xl', transform: 'scale(1.03)', transition: 'all 0.3s ease' }}
              >
                <Heading as="h3" size="md" mb={2} color="teal.300">
                  {item.title}
                </Heading>
                <Text color="gray.400">{item.desc}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
    <Box width="100%" h="2px" backgroundColor="gray.600"></Box>
    <Footer />
    </>
  );
}

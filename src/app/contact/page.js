'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, Stack, HStack, IconButton, useToast, chakra, shouldForwardProp, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    motion.div.propTypes?.includes(prop) || shouldForwardProp(prop),
});

export default function ContactPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    toast({
      title: 'Message Sent',
      description: `Thanks for reaching out! I'll get back to you soon.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
    <Navbar />
    <Box bg="gray.900" color="gray.100" py={{ base: 10, md: 20 }}>
      <Container maxW="3xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={8}
        >
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, teal.300, green.400)"
            bgClip="text"
          >
            Contact Me
          </Heading>
          <Text color="gray.400" mt={2}>
            {`Let's work together!`}
          </Text>

        </MotionBox>

        {/* Form */}
        <MotionBox
          bg="gray.800"
          p={8}
          rounded="md"
          boxShadow="md"
          w="100%"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <HStack spacing={4} w="100%" flexDirection={{ base: 'column', md: 'row' }}>
                <FormControl id="name" isRequired>
                  <FormLabel color="teal.300">Name</FormLabel>
                  <Input
                    placeholder="Your Name"
                    bg="gray.700"
                    border="none"
                    _focus={{ bg: 'gray.600' }}
                    color="gray.100"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel color="teal.300">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    bg="gray.700"
                    border="none"
                    _focus={{ bg: 'gray.600' }}
                    color="gray.100"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} w="100%" flexDirection={{ base: 'column', md: 'row' }}>
                <FormControl id="phone">
                  <FormLabel color="teal.300">Phone</FormLabel>
                  <Input
                    placeholder="+91-XXXXXXXXXX"
                    bg="gray.700"
                    border="none"
                    _focus={{ bg: 'gray.600' }}
                    color="gray.100"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="subject">
                  <FormLabel color="teal.300">Subject</FormLabel>
                  <Input
                    placeholder="Project Inquiry"
                    bg="gray.700"
                    border="none"
                    _focus={{ bg: 'gray.600' }}
                    color="gray.100"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </FormControl>
              </HStack>

              <FormControl id="message" isRequired>
                <FormLabel color="teal.300">Message</FormLabel>
                <Textarea
                  placeholder="Your message..."
                  bg="gray.700"
                  border="none"
                  _focus={{ bg: 'gray.600' }}
                  color="gray.100"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="md"
                w="full"
                _hover={{ bg: 'teal.400' }}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </MotionBox>

        {/* Contact Info */}
        <VStack mt={10} spacing={2} textAlign="center">
          <Text color="gray.400">📧 Email: manojnagpure2782003@gmail.com</Text>
          <Text color="gray.400">📞 Phone: +91-9764687625</Text>
          <Text color="gray.400">📍 Location: Nagpur, India</Text>
        </VStack>

        {/* Social Icons */}
        <Stack direction="row" spacing={4} justify="center" mt={6}>
          <IconButton
            as="a"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            size="lg"
            color="gray.400"
            _hover={{ color: 'teal.300' }}
          />
          <IconButton
            as="a"
            href="https://github.com"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            size="lg"
            color="gray.400"
            _hover={{ color: 'teal.300' }}
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            size="lg"
            color="gray.400"
            _hover={{ color: 'teal.300' }}
          />
        </Stack>

        {/* Testimonials */}
        <Box mt={12}>
          <Heading size="lg" textAlign="center" color="teal.300" mb={6}>
            {`"Trusted by clients worldwide"`}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box
              bg="gray.800"
              p={6}
              rounded="md"
              boxShadow="md"
              _hover={{ boxShadow: 'xl', transform: 'scale(1.02)', transition: 'all 0.3s ease' }}
            >
              <Text color="gray.300">
                {`"Manoj did an amazing job on our website. Highly recommend!"`}
              </Text>
              <Text mt={2} fontWeight="bold" color="teal.300">
                – Raj verma
              </Text>
            </Box>
            <Box
              bg="gray.800"
              p={6}
              rounded="md"
              boxShadow="md"
              _hover={{ boxShadow: 'xl', transform: 'scale(1.02)', transition: 'all 0.3s ease' }}
            >
              <Text color="gray.300">
                {`"Professional, timely, and great communication throughout the project."`}
              </Text>
              <Text mt={2} fontWeight="bold" color="teal.300">
                – Pratik Sharma
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>

    <Box width="100%" h="2px" backgroundColor="gray.600"></Box>
    <Footer />
    </>
  );
}

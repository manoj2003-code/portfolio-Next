'use client';

import { Box, Container, Heading, SimpleGrid, VStack, Icon, Text } from '@chakra-ui/react';
import { FaReact, FaGit } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { SiNextdotjs, SiChakraui, SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Bootstrap', icon: BsBootstrap },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Git', icon: FaGit },
  ];

  return (
    <Box bg="gray.800" color="white" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={12}
          bgGradient="linear(to-r, teal.300, green.400)"
          bgClip="text"
        >
          My Skills
        </Heading>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={6}>
          {skills.map((skill) => (
            <VStack
              key={skill.name}
              bg="gray.800"
              p={6}
              rounded="lg"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-5px) scale(1.05)',
                bgGradient: 'linear(to-r, teal.400, green.400)',
                color: 'white',
              }}
              cursor="pointer"
            >
              <Icon as={skill.icon} boxSize={8} color="teal.300" _groupHover={{ color: 'white' }} />
              <Text fontWeight="bold" fontSize="md">
                {skill.name}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

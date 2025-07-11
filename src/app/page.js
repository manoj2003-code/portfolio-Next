'use client'
import Navbar from '@/components/Navbar';
import { Button, Card, Heading, Box,HStack } from '@chakra-ui/react'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Box width="100%" h="2px" backgroundColor="gray.600"></Box>
    <Footer />
    
    </>
  )
}
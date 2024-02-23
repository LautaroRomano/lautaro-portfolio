import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Flex } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Myself from '@/components/Myself'
import Exp from '@/components/Exp'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Flex w={'100vw'} bg={'radial-gradient(circle, rgba(29,32,58,1) 0%, rgba(26,28,52,1) 15%, rgba(0,0,0) 100%)'} justify={'center'}>
        <Flex w={'1250px'} h={'100%'} align={'center'} flexDir={'column'}>
          <Navbar />
          <Myself />
          <Exp />
          <Projects />
          <AboutMe />
        </Flex>
      </Flex>
    </main>
  )
}

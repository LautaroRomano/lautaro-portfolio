import { Flex, Text, Avatar, Button } from '@chakra-ui/react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import MyButton from './MyButton';

export default function Myself() {
    return (
        <Flex w={'100%'} justify={'center'} py={'144'} position={'relative'}>
            <Flex w={'100%'} maxW={'800px'} flexDir={'column'}>
                <Flex flexDir={'row'}>
                    <Flex w={'80%'} flexDir={'column'} px={'15px'}>
                        <Flex flexDir={'column'} my={5}>
                            <Text color={'#fff'} fontSize={'xxx-large'}>Hola, <strong style={{ color: '#35C5F5' }}>soy Lautaro</strong></Text>
                            <Text color={'blue.100'} fontSize={'xl'} mt={'-10px'}>Desarrollador de software</Text>
                        </Flex>
                        <Text my={5} color={'#fff'} fontSize={'xl'}>+3 años de experiencia. <strong style={{ color: '#35C5F5' }}>Analista de Software y Desarrollador Fullstack.</strong> Especializado en diseño y desarrollo de sistemas empresariales.
                        </Text>
                    </Flex>
                    <Flex w={'20%'} px={'15px'}>
                        <Avatar name='Lautaro Romano' src='/img/Romano Lautaro.png' size={'2xl'}></Avatar>
                    </Flex>
                </Flex>
                <Flex w={'100%'} gap={5} flexWrap={'wrap'} my={5} justifyContent={'space-between'}>
                    <MyButton>
                        <CiLinkedin /> Linkedin
                    </MyButton>
                    <MyButton>
                        <FaGithub /> Github
                    </MyButton>
                    <MyButton>
                        <IoMailOutline /> Lautarooyt837@gmail.com
                    </MyButton>
                    <MyButton>
                        <FaRegAddressCard />Mi CV
                    </MyButton>
                </Flex>
            </Flex>
        </Flex>
    )
}
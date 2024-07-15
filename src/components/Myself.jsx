import { Flex, Text, Avatar, Button, Link } from '@chakra-ui/react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import MyButton from './MyButton';

export default function Myself() {
    return (
        <Flex w={'100%'} justify={'center'} py={['100','100','144','144']} position={'relative'}>
            <Flex w={'100%'} maxW={'800px'} flexDir={'column'} align={'center'}>
                <Flex flexDir={'row'}>
                    <Flex w={['100%', '100%', '80%', '80%']} flexDir={'column'} px={'15px'}>
                        <Flex flexDir={'column'} my={5}>
                            <Text color={'#fff'} fontSize={['xx-large', 'xx-large', 'xxx-large', 'xxx-large']}>Hola, <strong style={{ color: '#35C5F5' }}>soy Lautaro</strong></Text>
                            <Text color={'blue.100'} fontSize={'xl'} mt={'-10px'}>Desarrollador de software</Text>
                        </Flex>
                        <Text my={5} color={'#fff'} fontSize={['l', 'l', 'xl', 'xl']}>+3 años de experiencia. <strong style={{ color: '#35C5F5' }}>Analista de Software y Desarrollador Fullstack.</strong> Especializado en diseño y desarrollo de sistemas empresariales.
                        </Text>
                    </Flex>
                    <Flex w={'20%'} px={'15px'} display={['none', 'none', 'flex', 'flex']}>
                        <Avatar name='Lautaro Romano' src='/img/Romano Lautaro.png' size={'2xl'}></Avatar>
                    </Flex>
                </Flex>
                <Flex w={['95%', '95%', '95%', '100%']} gap={[1, 2, 3, 5]} flexWrap={'wrap'} my={5} justifyContent={'space-between'}>
                    <Link href='https://www.linkedin.com/in/romanolautaroexequiel' target="_blank">
                        <MyButton>
                            <CiLinkedin /> <Text display={['none', 'none', 'flex', 'flex']}>Linkedin</Text>
                        </MyButton>
                    </Link>
                    <Link href='https://github.com/LautaroRomano' target="_blank">
                        <MyButton>
                            <FaGithub /> <Text display={['none', 'none', 'flex', 'flex']}>Github</Text>
                        </MyButton>
                    </Link>
                    <Link href='mailto:lautarooyt837@gmail.com' target="_blank">
                        <MyButton>
                            <IoMailOutline /> <Text display={['none', 'none', 'flex', 'flex']}>Lautarooyt837@gmail.com</Text>
                        </MyButton>
                    </Link>
                    <Link href='/Romano Lautaro CV.pdf' target="_blank">
                        <MyButton>
                            <FaRegAddressCard /> <Text display={['none', 'none', 'flex', 'flex']}>Mi CV</Text>
                        </MyButton>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}
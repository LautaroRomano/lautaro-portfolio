import { Flex, Text, Image, Button, useDisclosure, Modal, ModalContent, Link } from '@chakra-ui/react'
import { FaCode, FaLink } from "react-icons/fa";
import MyButton from './MyButton';
import { useState } from 'react';

import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { useRouter } from 'next/router';

const technologies = {
    react: { icon: FaReact, name: 'React', bg: '#0C9FCB', color: '#fff' },
    reactNative: { icon: TbBrandReactNative, name: 'React Native', bg: '#0C9FCB', color: '#fff' },
    postgresql: { icon: BiLogoPostgresql, name: 'PostgreSQL', bg: '#31648C', color: '#fff' },
    next: { icon: SiNextdotjs, name: 'Next.js', bg: '#000', color: '#fff' },
    firebase: { icon: IoLogoFirebase, name: 'Firebase', bg: '#FFAA1A', color: '#fff' },
    express: { icon: SiExpress, name: 'Express', bg: '#FFAA1A', color: '#fff' },
}

export default function Projects() {

    const [imgRef, setImgRef] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter()

    return (
        <Flex w={['95%', '95%', '95%', '100%']} justify={'center'} pb={'144px'} position={'relative'} id='Proyectos'>
            <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
                <ModalContent>
                    <Image src={imgRef} objectFit={'contain'} />
                </ModalContent>
            </Modal>
            <Flex w={'100%'} maxW={'1000px'} flexDir={'column'}>
                <Flex flexDir={'row'}>
                    <Flex w={'100%'} flexDir={'column'}>
                        <Flex color={'#fff'} align={'center'} gap={3} fontSize={'3xl'}>
                            <FaCode />
                            <Text>Mis proyectos</Text>
                        </Flex>

                        <Flex position={'relative'} w={'100%'} flexDir={'column'} gap={5}>

                            <Flex w={'100%'} justify={'space-between'} mt={5} flexDir={['column', 'column', 'row', 'row']}>
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}>
                                    <Image src='/img/bronovios.png' objectFit={'contain'} onClick={() => { onOpen(); setImgRef('/img/bronovios.png') }} />
                                </Flex>
                                <Flex w={['100%', '100%', '55%', '55%']} flexDir={'column'} ps={[0, 0, 25, 25]} justifyContent={'space-between'} gap={[5, 5, 2, 2]} mt={['15px', '15px', '0px', '0px']}>
                                    <Text color={'#fff'} fontSize={['x-large', 'x-large', 'xx-large', 'xx-large']} fontWeight={'bold'}>Bronovios.com</Text>
                                    <Flex w={'100%'} gap={2} flexWrap={'wrap'}>
                                        <Flex bg={technologies.next.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.next.color} borderRadius={'2xl'}>
                                            <technologies.next.icon />
                                            <Text>
                                                {technologies.next.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.react.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.react.color} borderRadius={'2xl'}>
                                            <technologies.react.icon />
                                            <Text>
                                                {technologies.react.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.postgresql.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.postgresql.color} borderRadius={'2xl'}>
                                            <technologies.postgresql.icon />
                                            <Text>
                                                {technologies.postgresql.name}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        Aplicacion web para ayudar a los chicos de bronovios a tener contacto directo con la gente que esta interesada en emigrar, brindandoles asesorias y cursos.
                                    </Text>
                                    <Flex >
                                        <Link href='https://www.bronovios.com' target='_blank'>
                                            <MyButton><FaLink /> Preview</MyButton>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex w={'100%'} justify={'space-between'} mt={5} flexDir={['column', 'column', 'row', 'row']}>
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}>
                                    <Image src='/img/nutriblock.png' objectFit={'contain'} onClick={() => { onOpen(); setImgRef('/img/nutriblock.png') }} />
                                </Flex>
                                <Flex w={['100%', '100%', '55%', '55%']} flexDir={'column'} ps={[0, 0, 25, 25]} justifyContent={'space-between'} gap={[5, 5, 2, 2]} mt={['15px', '15px', '0px', '0px']}>
                                    <Text color={'#fff'} fontSize={['x-large', 'x-large', 'xx-large', 'xx-large']} fontWeight={'bold'}>LEMONPAD</Text>
                                    <Flex w={'100%'} gap={2} flexWrap={'wrap'}>
                                        <Flex bg={technologies.next.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.next.color} borderRadius={'2xl'}>
                                            <technologies.next.icon />
                                            <Text>
                                                {technologies.next.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.react.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.react.color} borderRadius={'2xl'}>
                                            <technologies.react.icon />
                                            <Text>
                                                {technologies.react.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.firebase.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.firebase.color} borderRadius={'2xl'}>
                                            <technologies.firebase.icon />
                                            <Text>
                                                {technologies.firebase.name}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        Aplicacion web para ayudar a los nutricionista a tener un contacto directo con sus pacientes, pudiendo gestionar sus citas, asignarles alimentos para cada dia y mas...
                                    </Text>
                                    <Flex >
                                        <Link href='https://nutriblock.vercel.app/' target='_blank' >
                                            <MyButton><FaLink /> Preview</MyButton>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex w={'100%'} justify={'space-between'} mt={5} flexDir={['column', 'column', 'row', 'row']}>
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}>
                                    <Image src='/img/red-apuntes.png' objectFit={'contain'} onClick={() => { onOpen(); setImgRef('/img/red-apuntes.png') }} />
                                </Flex>
                                <Flex w={['100%', '100%', '55%', '55%']} flexDir={'column'} ps={[0, 0, 25, 25]} justifyContent={'space-between'} gap={[5, 5, 2, 2]} mt={['15px', '15px', '0px', '0px']}>
                                    <Text color={'#fff'} fontSize={['x-large', 'x-large', 'xx-large', 'xx-large']} fontWeight={'bold'}>Redapuntes</Text>
                                    <Flex w={'100%'} gap={2} flexWrap={'wrap'}>
                                        <Flex bg={technologies.express.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.express.color} borderRadius={'2xl'}>
                                            <technologies.express.icon />
                                            <Text>
                                                {technologies.express.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.reactNative.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.reactNative.color} borderRadius={'2xl'}>
                                            <technologies.reactNative.icon />
                                            <Text>
                                                {technologies.reactNative.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.postgresql.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.firebase.color} borderRadius={'2xl'}>
                                            <technologies.postgresql.icon />
                                            <Text>
                                                {technologies.postgresql.name}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        El sitio donde puedes encontrar todos los recursos que nesecitas para tu vida universitaria.
                                    </Text>
                                    <Flex >
                                        <Link href='https://redapuntes.vercel.app/' target='_blank' >
                                            <MyButton><FaLink /> Preview</MyButton>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex w={'100%'} justify={'space-between'} mt={5} flexDir={['column', 'column', 'row', 'row']}>
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}>
                                    <Image src='/img/screen-r.png' objectFit={'contain'} onClick={() => { onOpen(); setImgRef('/img/screen-r.png') }} />
                                </Flex>
                                <Flex w={['100%', '100%', '55%', '55%']} flexDir={'column'} ps={[0, 0, 25, 25]} justifyContent={'space-between'} gap={[5, 5, 2, 2]} mt={['15px', '15px', '0px', '0px']}>
                                    <Text color={'#fff'} fontSize={['x-large', 'x-large', 'xx-large', 'xx-large']} fontWeight={'bold'}>scren-recorder</Text>
                                    <Flex w={'100%'} gap={2} flexWrap={'wrap'}>
                                        <Flex bg={technologies.express.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.express.color} borderRadius={'2xl'}>
                                            <technologies.express.icon />
                                            <Text>
                                                {technologies.express.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.reactNative.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.reactNative.color} borderRadius={'2xl'}>
                                            <technologies.reactNative.icon />
                                            <Text>
                                                {technologies.reactNative.name}
                                            </Text>
                                        </Flex>
                                        <Flex bg={technologies.postgresql.bg} padding={'1px 10px'} align={'center'} gap={'10px'} color={technologies.firebase.color} borderRadius={'2xl'}>
                                            <technologies.postgresql.icon />
                                            <Text>
                                                {technologies.postgresql.name}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        Aplicacion para grabar la pantalla de tu PC sin instalar nada.
                                    </Text>
                                    <Flex >
                                        <Link href='https://screen-recorder-beta.vercel.app/' target='_blank' >
                                            <MyButton><FaLink /> Preview</MyButton>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
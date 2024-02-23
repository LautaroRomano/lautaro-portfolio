import { Flex, Text, Image, Button, useDisclosure, Modal, ModalContent } from '@chakra-ui/react'
import { FaCode, FaLink } from "react-icons/fa";
import MyButton from './MyButton';
import { useState } from 'react';


export default function Projects() {

    const [imgRef, setImgRef] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex w={'100%'} justify={'center'} pb={'144px'} position={'relative'} id='Proyectos'>
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
                            <Flex w={'100%'} justify={'space-between'} mt={5} >
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}
                                    backgroundImage={'https://png.pngtree.com/thumb_back/fh260/back_pic/04/24/66/495836a65fcb8f9.jpg'}
                                >
                                    <Image src='/img/nutriblock.png' objectFit={'contain'} position={'absolute'} top={10} left={10} onClick={() => { onOpen(); setImgRef('/img/nutriblock.png') }} />
                                </Flex>
                                <Flex w={'55%'} flexDir={'column'} ps={25} justifyContent={'space-between'}>
                                    <Text color={'#fff'} fontSize={'xx-large'} fontWeight={'bold'}>Nutriblock</Text>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        Aplicacion web para ayudar a los nutricionista a tener un contacto directo con sus pacientes, pudiendo gestionar citasm asignarles alimentos para cada dia y mas...
                                    </Text>
                                    <Flex >
                                        <MyButton><FaLink /> Preview</MyButton>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex w={'100%'} justify={'space-between'} mt={5} >
                                <Flex w={'400px'} h={'230px'} position={'relative'} overflow={'hidden'} cursor={'pointer'}
                                    backgroundImage={'https://png.pngtree.com/thumb_back/fh260/back_pic/04/24/66/495836a65fcb8f9.jpg'}
                                >
                                    <Image src='/img/nutriblock.png' objectFit={'contain'} position={'absolute'} top={10} left={10} onClick={() => { onOpen(); setImgRef('/img/nutriblock.png') }}/>
                                </Flex>
                                <Flex w={'55%'} flexDir={'column'} ps={25} justifyContent={'space-between'}>
                                    <Text color={'#fff'} fontSize={'xx-large'} fontWeight={'bold'}>Nutriblock</Text>
                                    <Text color={'#ccc'} fontWeight={'semibold'} >
                                        Aplicacion web para ayudar a los nutricionista a tener un contacto directo con sus pacientes, pudiendo gestionar citasm asignarles alimentos para cada dia y mas...
                                    </Text>
                                    <Flex >
                                        <MyButton><FaLink /> Preview</MyButton>
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
import { Flex, Text, Image } from '@chakra-ui/react'
import { FaUser } from "react-icons/fa";


export default function AboutMe() {

    return (
        <Flex w={['95%', '95%', '95%', '100%']} justify={'center'} pb={'144px'} position={'relative'} id='Sobre-mi'>
            <Flex w={'100%'} maxW={'1000px'} flexDir={'column'}>
                <Flex flexDir={'row'}>
                    <Flex w={'100%'} flexDir={'column'}>
                        <Flex color={'#fff'} align={'center'} gap={3} fontSize={'3xl'}>
                            <FaUser />
                            <Text>Sobre Mi</Text>
                        </Flex>
                        <Flex w={'100%'}>
                            <Flex position={'relative'} w={['100%','100%','60%','60%']} flexDir={'column'} gap={5}>
                                <Text my={5} color={'#fff'} fontSize={'xl'}>
                                    Mi nombre es Lautaro Romano y soy un <strong style={{ color: '#35C5F5' }}>apasionado desarrollador argentino</strong>. Desde que tenía 16 años, me adentré en el mundo de la programación y desde entonces, no he dejado de explorar sus infinitas posibilidades. Actualmente, me encuentro en la etapa final de mis estudios para obtener el título de <strong style={{ color: '#35C5F5' }}>ingeniero en sistemas de información</strong>, una carrera que ha consolidado mi pasión por la tecnología y el desarrollo de software.
                                </Text>
                                <Text my={5} color={'#fff'} fontSize={'xl'}>
                                    Mi trayectoria profesional se ha ido moldeando gracias a mi trabajo como <strong style={{ color: '#35C5F5' }}>desarrollador Fullstack en Digicom</strong>, donde he tenido la oportunidad de sumergirme en proyectos desafiantes que han enriquecido mi experiencia y habilidades. Además, he complementado mi aprendizaje con proyectos como <strong style={{ color: '#35C5F5' }}>freelancer, colaborando con plataformas como bronovios.com</strong>, donde he tenido la libertad de aplicar mis conocimientos y creatividad en el desarrollo de soluciones innovadoras.
                                </Text>
                            </Flex>
                            <Flex w={'40%'} h={'100%'} p={55} display={['none', 'none', 'flex', 'flex']}>
                                <Image name='Lautaro Romano' src='/img/Romano Lautaro.png' objectFit={'contain'}></Image>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
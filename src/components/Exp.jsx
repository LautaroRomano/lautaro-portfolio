import { Flex, Text, Link } from '@chakra-ui/react'
import { MdOutlineWorkOutline } from "react-icons/md";


export default function Exp() {
    return (
        <Flex w={['95%', '95%', '95%', '100%']} justify={'center'} pb={'144px'} position={'relative'} id='Experiencia'>
            <Flex w={'100%'} maxW={'800px'} flexDir={'column'}>
                <Flex flexDir={'row'}>
                    <Flex w={'100%'} flexDir={'column'}>
                        <Flex color={'#fff'} align={'center'} gap={3} fontSize={'3xl'}>
                            <MdOutlineWorkOutline />
                            <Text>Experiencia laboral</Text>
                        </Flex>
                        <Flex position={'relative'} w={'100%'}>
                            <Flex w={'1px'} h={['700px', '700px', '500px', '500px']} bg={'#fff'} />
                            <Flex position={'absolute'} left={'-10px'} top={55} w={'100%'}>
                                <Flex w={'20px'} h={'20px'} borderRadius='50%' bg={'#35C5F5'} />
                                <Flex w={'100%'} justify={'space-between'} flexDir={['column', 'column', 'row', 'row']}>
                                    <Flex flexDir={'column'}>
                                        <Text fontSize={'xl'} fontWeight={'bold'} color={'#35C5F5'} ms={'15px'}>Desarrollador Fullstack</Text>
                                        <Link href='https://www.bronovios.com' target="_blank">
                                            <Text fontSize={'l'} fontWeight={'bold'} color={'#ccc'} ms={'20px'}>Bronovios.com</Text>
                                        </Link>
                                        <Text fontSize={'l'} fontWeight={'semibold'} color={'#ccc'} ms={'20px'}>Noviembre 2023 - Marzo 2024</Text>
                                    </Flex>
                                    <Flex w={['95%', '95%', '55%', '55%']}>
                                        <Text color={'#fff'} ms={['20px', '20px', '0px', '0px']} mt={['20px', '20px', '0px', '0px']}>
                                            Desarrollé una aplicación web para cursos y asesorías, abarcando desde el análisis hasta la implementación técnica. Usé Next.js para el frontend, PostgreSQL para la base de datos, Resend para correos y Stripe para pagos seguros.
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex position={'absolute'} left={'-10px'} w={'100%'} top={[350, 350, 230, 230]}>
                                <Flex w={'20px'} h={'20px'} borderRadius='50%' bg={'#35C5F5'} />
                                <Flex w={'100%'} justify={'space-between'} flexDir={['column', 'column', 'row', 'row']}>
                                    <Flex flexDir={'column'}>
                                        <Text fontSize={'xl'} fontWeight={'bold'} color={'#35C5F5'} ms={'15px'}>Desarrollador Fullstack</Text>
                                        <Link href='https://digicom.net.ar/web/' target="_blank">
                                            <Text fontSize={'l'} fontWeight={'bold'} color={'#ccc'} ms={'20px'}>Digicom</Text>
                                        </Link>
                                        <Text fontSize={'l'} fontWeight={'semibold'} color={'#ccc'} ms={'20px'}>Actualmente...</Text>
                                    </Flex>
                                    <Flex w={['95%', '95%', '55%', '55%']}>
                                        <Text color={'#fff'} ms={['20px', '20px', '0px', '0px']} mt={['20px', '20px', '0px', '0px']}>
                                            Desarrollo y mantenimiento de aplicaciones web fullstack con React.js, Websocket, RabbitMQ y SQL Server. Colaboración en la recopilación de requisitos, diseño de arquitectura y garantía de integración. Administración de bases de datos, incluyendo modelado, diseño de esquemas y optimización de consultas para almacenamiento eficiente de datos.
                                        </Text>
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
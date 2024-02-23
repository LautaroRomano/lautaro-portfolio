import { Flex, Text, Link } from '@chakra-ui/react'
import React from 'react';

export default function Navbar() {
    const handleClick = (event, targetId) => {
        event.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Hace que el desplazamiento sea suave
            });
        }
    };

    return (
        <Flex
            w={'100%'}
            h={'45px'}
            background={'rgba(255, 255, 255, 0.19)'}
            borderRadius='16px'
            backdropFilter='blur(5px)'
            justify={'space-evenly'}
            align={'center'}
            maxW={'800px'}
            color={'gray.300'}
            my={'15px'}
        >
            <Link href='#Experiencia' onClick={(e) => handleClick(e, '#Experiencia')}>
                <Text cursor={'pointer'}>Experiencia</Text>
            </Link>
            <Link href='#Proyectos' onClick={(e) => handleClick(e, '#Proyectos')}>
                <Text cursor={'pointer'}>Proyectos</Text>
            </Link>
            <Link href='#Sobre-mi' onClick={(e) => handleClick(e, '#Sobre-mi')}>
                <Text cursor={'pointer'}>Sobre mi</Text>
            </Link>
            <Link href='https://www.linkedin.com/in/romanolautaroexequiel' target="_blank">
                <Text cursor={'pointer'}>Contacto</Text>
            </Link>
        </Flex>
    )
}

import { Button } from "@chakra-ui/react";

export default function MyButton({ children, ...props }) {
    return (
        <Button
            bg={'linear-gradient(90deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 100%)'}
            border={'1px solid #445'}
            color={'gray.300'}
            borderRadius={'3xl'}
            px={'25px'}
            _hover={{
                bg: 'linear-gradient(90deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 100%)',
                border: '2px solid #fff'
            }}
            gap={3}
            {...props}
        >
            {children}
        </Button>
    )
}
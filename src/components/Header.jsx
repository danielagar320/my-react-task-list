import {Image, Heading, Stack } from "@chakra-ui/react";

function Header(){
    return(
        
        <Stack>

            <Heading as='h3' size='lg' color="Black" position="absolute" top="200px" left="580px" zIndex="2">
                BIENVENIDO A TODO APP
            </Heading>
            
            <Image
                boxSize="lg"
                width="100%"
                height="300px"
                objectFit="cover"
                src="./img/fondo.jpg"
                alt="Dan Abramov"
                position="center"
                zIndex="1"
            />

        </Stack>
    
        

    );
}

export default Header;

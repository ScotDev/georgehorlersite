import React from 'react'

import { Text, Heading, Box, Button, ButtonGroup, Stack } from '@chakra-ui/core'

export default function Main() {
    return (
        <Box backgroundImage="url('https://i.imgur.com/dUlYhHj.jpg')" backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat" minHeight="100vh" minWidth="100%"
            display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            <Stack spacing={6} textAlign="center" >
                <Heading as="h1" color="white" fontSize="6xl">I'm George Horler</Heading>
                <Text color="white" height="10%" fontSize="2xl">An artist and mixing engineer</Text>
                <ButtonGroup spacing={4} size="lg">
                    <Button as="a" href="#about" backgroundColor="teal.400" color="white" _focus={{ bg: "white", color: "teal.400" }} _hover={{ bg: "white", color: "teal.400" }}>See more</Button>
                    <Button as="a" href="#contact" color="gray.600" _focus={{ bg: "gray.600", color: "white" }} _hover={{ bg: "gray.600", color: "white" }}>Contact</Button>
                </ButtonGroup>
            </Stack>

        </Box>
    )
}

// Main image source
// https://images.unsplash.com/photo-1433567212640-211efabc03e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80
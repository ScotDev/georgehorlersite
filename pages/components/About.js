import React from 'react'

import { Text, Heading, Box, Button, ButtonGroup, Stack, Flex } from '@chakra-ui/core'

export default function About() {
    return (
        <Box textAlign="center" p={6} backgroundColor="gray.50" color="teal.400">
            <Heading as="h2" mb={8} size="2xl">About me</Heading>
            <Flex alignItems="center" justifyContent="center" flexDirection={["column", "column", "column", "row"]}>
                <Box width={1 / 3} alignItems="center" display="flex" flexDirection="column">
                    <Heading as="h3" fontWeight={500} mb={4}>Placeholder</Heading>
                    <Text px={[2, 4, 6, 8]}>text text text text text text text text text text text text text text text text</Text>
                </Box>
                <Box width={1 / 3} alignItems="center" display="flex" flexDirection="column">
                    <Heading as="h3" fontWeight={500} mb={4}>Placeholder</Heading>
                    <Text px={[2, 4, 6, 8]}>text text text text text text text text text text text text text text text text</Text>
                </Box>
                <Box width={1 / 3} alignItems="center" display="flex" flexDirection="column">
                    <Heading as="h3" fontWeight={500} mb={4}>Placeholder</Heading>
                    <Text px={[2, 4, 6, 8]}>text text text text text text text text text text text text text text text text</Text>
                </Box>

            </Flex>
        </Box>
    )
}

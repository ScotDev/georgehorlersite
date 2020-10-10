import React from 'react';

import { Box, Text, Link } from '@chakra-ui/core'

export default function Credits() {
    return (
        <Box textAlign="center" p={4} mb={6}>
            <Text fontSize="md" color="teal.400" >
                <Link href="https://github.com/ScotDev" isExternal>
                    Created by ScotDev </Link>
            </Text>
        </Box>
    )
}
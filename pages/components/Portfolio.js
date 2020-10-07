import React from 'react';

import { Text, Heading, Box, PseudoBox, Button, ButtonGroup, Stack, Grid, Image } from '@chakra-ui/core'

export default function Portfolio() {
    return (
        // <PseudoBox backgroundColor="red.50" >
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} templateRows="auto" gap={6} p={4} backgroundColor="gray.50" >

            <Image src="https://f4.bcbits.com/img/a4235988800_16.jpg" objectFit="cover" w="100%" h="550px" />
            <Image src="https://f4.bcbits.com/img/a1111746422_16.jpg" objectFit="cover" w="100%" h="550px" />
            <Image src="https://f4.bcbits.com/img/a2521703309_10.jpg" objectFit="cover" w="100%" h="550px" />
            <Image src="https://f4.bcbits.com/img/a2063876904_10.jpg" objectFit="cover" w="100%" h="550px" />
            <Image src="https://f4.bcbits.com/img/a3722290065_16.jpg" objectFit="cover" w="100%" h="550px" />


        </Grid>


        // </PseudoBox>
    )
}

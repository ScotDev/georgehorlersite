import React from 'react';


import { Box, PseudoBox, Image, Link, Text } from '@chakra-ui/core';

export default function PortfolioItem({ imageSrc, trackName, trackLink, playableEmbedSrc, albumType }) {
    return (
        <Box p={4} borderWidth="2px" borderColor="gray.300" rounded="lg" overflow="hidden" backgroundColor="gray.50">
            <Image src={imageSrc} objectFit="cover" w="100%" h="425px" />

            <Box py={2} display="flex" flexDirection="column" >
                <Link href={trackLink} color="teal.400" fontWeight={600} fontSize="2xl" pt={4} pb={2} isExternal>{trackName}</Link>
                <Text color="teal.400" pb={4}>{albumType}</Text>
                <PseudoBox >
                    <iframe width="100%" height="50px" frameBorder="0" src={playableEmbedSrc} seamless><a href={trackLink}>{trackName}</a></iframe>
                </PseudoBox>

            </Box>

        </Box>
    )
}

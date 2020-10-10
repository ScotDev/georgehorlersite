import React from 'react';


import { Box, PseudoBox, Image, Link } from '@chakra-ui/core';

export default function PortfolioItem({ imageSrc, trackName, trackLink, playableEmbedSrc }) {
    return (
        <Box p={4} borderWidth="2px" borderColor="gray.300" rounded="lg" overflow="hidden">
            <Image src={imageSrc} objectFit="cover" w="100%" h="450px" />

            <Box py={2} display="flex" flexDirection="column" >
                <Link href={trackLink} color="teal.400" fontWeight={600} fontSize="2xl" py={4} isExternal>{trackName}</Link>
                <PseudoBox>
                    <iframe width="100%" height="42px" frameBorder="0" src={playableEmbedSrc} seamless><a href={trackLink}>{trackName}</a></iframe>
                </PseudoBox>

            </Box>

        </Box>
    )
}

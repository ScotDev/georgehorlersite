import React from 'react';

import { Grid } from '@chakra-ui/core'

import PortfolioItem from './PortfolioItem';

// This should really be mapped through from a data source, but as the content is largely static and unchanging right now this is sufficient
const data = [
    {
        id: 0,
        imageSrc: "https://f4.bcbits.com/img/a4235988800_16.jpg", trackName: "Life is My Very Beautiful Friend", trackLink: "https://bandcamp.com/EmbeddedPlayer/album=4002028663/size=small/bgcol=ffffff/linkcol=333333/transparent=true/", playableEmbedSrc: "https://bandcamp.com/EmbeddedPlayer/album=4002028663/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
    },
    {
        id: 1,
        imageSrc: "https://f4.bcbits.com/img/a1111746422_16.jpg",
        trackName: "Musik von Holy Loaf",
        trackLink: "https://holyloaf.bandcamp.com/album/musik-von-holy-loaf-2",
        playableEmbedSrc: "https://bandcamp.com/EmbeddedPlayer/album=1431857614/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
    },
    {
        id: 2,
        imageSrc: "https://f4.bcbits.com/img/a2521703309_10.jpg",
        trackName: "Shephard",
        trackLink: "https://holyloaf.bandcamp.com/track/shepherd",
        playableEmbedSrc: "https://bandcamp.com/EmbeddedPlayer/track=201944773/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
    },
    {
        id: 3,
        imageSrc: "https://f4.bcbits.com/img/a2063876904_10.jpg",
        trackName: "Holy Loaf",
        trackLink: "https://holyloaf.bandcamp.com/album/holy-loaf",
        playableEmbedSrc: "https://bandcamp.com/EmbeddedPlayer/album=763909227/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
    },
    {
        id: 4,
        imageSrc: "https://f4.bcbits.com/img/a3722290065_16.jpg",
        trackName: "People",
        trackLink: "https://holyloaf.bandcamp.com/album/people",
        playableEmbedSrc: "https://bandcamp.com/EmbeddedPlayer/album=4061878917/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
    }
]


export default function Portfolio() {
    return (
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} templateRows="auto" gap={8} p={4} mb={6}  >

            <PortfolioItem {...data[0]}></PortfolioItem>
            <PortfolioItem {...data[1]}></PortfolioItem>
            <PortfolioItem {...data[2]}></PortfolioItem>
            <PortfolioItem {...data[3]}></PortfolioItem>
            <PortfolioItem {...data[4]}></PortfolioItem>

        </Grid>



    )
}
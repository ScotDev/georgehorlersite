import Head from 'next/head'

import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/core";

import Main from './components/Main'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Credits from './components/Credits';

const customTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
};

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box backgroundColor="white" display="flex" flexDirection="column" alignItems="center">
        <Head>
          <title>George Horler</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Main></Main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Credits></Credits>

      </Box>
    </ThemeProvider>
  )
}

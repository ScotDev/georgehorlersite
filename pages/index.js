import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
// import customTheme from './theme'

import Main from './components/Main'

const customTheme = {
  ...theme,
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
};

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Main></Main>

      </div>
    </ThemeProvider>
  )
}

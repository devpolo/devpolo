import type { AppProps } from "next/app"

import { ThemeProvider } from "styled-components"

import { useGoogleAnalytics } from "~/libs/ga"
import { GlobalStyle, theme } from "~/styles"

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics()

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

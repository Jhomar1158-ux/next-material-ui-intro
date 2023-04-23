import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import {darkTheme} from '../themes'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

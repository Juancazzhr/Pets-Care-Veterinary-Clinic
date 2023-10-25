import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider  } from "@mui/material";

import LayoutGeneral from '../components/layouts/LayoutGeneral'
import { theme } from "../styles/material-theme";

export default function App({ Component, pageProps }: AppProps) {

  const LayoutComponent = (Component as any).Layout;
  return   <ThemeProvider theme={theme}>
    <CssBaseline />
    {LayoutComponent ?
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
      :
      <LayoutGeneral>
        <Component {...pageProps} />
      </LayoutGeneral>

    }
  </ThemeProvider>
}

import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";

import LayoutGeneral from '../components/layouts/LayoutGeneral'
import { theme } from "../styles/material-theme";
//import { AuthProvider } from '../context/AuthContext';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {

  const LayoutComponent = (Component as any).Layout;

  const domain = "dev-ud2x4j7fl4eku5h1.us.auth0.com"
  const clientId = "yBgYMeusqcMUWI2R3I4axG7XPDgFyDy0"
  const audience = 'https://dev-ud2x4j7fl4eku5h1.us.auth0.com/api/v2/'

  //pendiente validar si las toma desde el archivo .env
  // const domain = process.env.AUTH_DOMAIN
  // const clientId = process.env.AUTH_CLIENT_ID
  // const audience = process.env.AUTH_AUDIENCE

  return <ThemeProvider theme={theme}>
    <Auth0Provider
      domain = {domain}
      clientId={clientId}
      authorizationParams={{
        audience : audience,
        redirect_uri : '/',
      }}
    >
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
    </Auth0Provider>
  </ThemeProvider>
}

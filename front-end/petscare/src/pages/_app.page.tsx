import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";

import LayoutGeneral from '../components/layouts/LayoutGeneral'
import { theme } from "../styles/material-theme";
import { AuthProvider } from '../context/AuthContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {

  const LayoutComponent = (Component as any).Layout;

  const domain = 'dev-juancazzhr.us.auth0.com'
  const clientId = 'T9KXSe487Atr7DdLzPrjatG2765qJZfc'
  const audience = `https://${domain}/api/v2/`

  //pendiente validar si las toma desde el archivo .env
  // const domain = process.env.AUTH_DOMAIN
  // const clientId = process.env.AUTH_CLIENT_ID
  // const audience = process.env.AUTH_AUDIENCE

  return <ThemeProvider theme={theme}>
   <UserProvider>
    <Auth0Provider
      domain = {domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/client"
        /* redirect_uri: `${process.env.BASE_URL}` */
      }}
    > 
    {/* <AuthProvider> */}
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
      {/* </AuthProvider> */}
    </Auth0Provider>
    </UserProvider>
  </ThemeProvider>
}

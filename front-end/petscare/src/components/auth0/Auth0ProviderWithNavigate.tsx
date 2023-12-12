import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from 'next/router'

type Props = {
    children: JSX.Element
}


export const Auth0ProviderWithNavigate = ({children} : Props)=>{
    const navigate = useRouter()

//     const domain = 'dev-juancazzhr.us.auth0.com'
//   const clientId = 'T9KXSe487Atr7DdLzPrjatG2765qJZfc'
//   const audience = `https://${domain}/api/v2/`

    const domain = process.env.AUTH_DOMAIN
    const clientId = process.env.AUTH_CLIENT_ID
    const audience = process.env.AUTH_AUDIENCE
    const redirectUri = `${process.env.BASE_URL}`

    const onRedirectCallback = (appState : AppState | undefined)=>{
        navigate.push(appState?.returnTo || window.location.pathname)
    }

    if(!(domain && clientId && redirectUri)){
        return null
    }

    return(
        <Auth0Provider
            domain = {domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )


}
import { environment } from 'src/environments/environment';
import { AuthConfig } from 'angular-oauth2-oidc';

export const TISS_API = environment.api;

export const authConfig: AuthConfig = {
  loginUrl: `${TISS_API}/oauth/token`,
    // Url of the Identity Provider
  issuer: `${TISS_API}/index.html`,

  // URL of the SPA to redirect the user to after login
  redirectUri: `${TISS_API}`,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'app-tiss',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'read',
  
  strictDiscoveryDocumentValidation: false,
  
  responseType: 'token',
  
  oidc: false

}
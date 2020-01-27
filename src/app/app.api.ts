import { environment } from 'src/environments/environment';
import { AuthConfig } from 'angular-oauth2-oidc';

export const TISS_API = environment.api;

export const authConfig: AuthConfig = {
  //loginUrl: `${TISS_API}/oauth/token`,

  tokenEndpoint: `${TISS_API}/oauth/token`,

    // Url of the Identity Provider
  issuer: `${TISS_API}`,

  //userinfoEndpoint: '`${TISS_API}/user/',

  // URL of the SPA to redirect the user to after login
  redirectUri: `${TISS_API}`,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'app-tiss-pass',

  dummyClientSecret: 'aNWTdoGwBD1evkBIxNl6WdDvFtc0LBV1dxQ-dA_qLhTrJCWzkkerUFy_GwylPCotoqhtBP4AJ1GadQGl',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'read write',

  strictDiscoveryDocumentValidation: false,

  responseType: 'token',

  oidc: false,

  requireHttps: false

};

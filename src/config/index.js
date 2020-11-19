export const configAndroid = {
  redirectUrl: 'loadSmartCodeTest://oauthredirect',
  clientId: 'Iv1.ea941ad32a20de2e',
  clientSecret: '00ae9780ef749527fcc9a546f6ec22b48db68fb7',
  scopes: ['user'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/Iv1.ea941ad32a20de2e',
  },
};

export const configIos = {
  redirectUrl: 'loadSmartCodeTest://oauth',
  clientId: 'Iv1.e5d55574d00cc6c0',
  clientSecret: '1bd8ae7831a19ff73d9fa8d386308664ac911442',
  scopes: ['user'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/Iv1.e5d55574d00cc6c0',
  },
};

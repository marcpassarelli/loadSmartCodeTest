export const configAndroid = {
  redirectUrl: 'loadSmartCodeTest://oauth',
  clientId: 'Iv1.ea941ad32a20de2e',
  clientSecret: 'bc0dd330a24d87ee6dad9c816d2500cfab8c24af',
  scopes: ['user'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/Iv1.e5d55574d00cc6c0',
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

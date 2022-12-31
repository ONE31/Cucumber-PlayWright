declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST_URI: string;
      RM2_API: string;
      GETHELP_API: string;
      OAUTH_URI: string;
      CLIENTID: string;
      SECRETID: string;
      RM2_API_SCOPE: string;
      GETHELP_API_SCOPE: string;
    }
  }
}

export {};

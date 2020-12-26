declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GA_TRACKING_ID: string;
    }
  }
}

export {};

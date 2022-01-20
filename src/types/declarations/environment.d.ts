declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: "prod" | "dev"
    }
  }
}

export {}

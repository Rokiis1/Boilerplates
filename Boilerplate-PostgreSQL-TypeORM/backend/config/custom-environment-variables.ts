export default {
  // Dev / Prod
  port: "PORT",
  postgresConfig: {
    databaseUrl: "DATABASE_URL",
    host: "POSTGRES_HOST",
    port: "POSTGRES_PORT",
    username: "POSTGRES_USER",
    password: "POSTGRES_PASSWORD",
    database: "POSTGRES_DB",
  },

  // Tokens
  accessTokenPrivateKey: "JWT_ACCESS_TOKEN_PRIVATE_KEY",
  accessTokenPublicKey: "JWT_ACCESS_TOKEN_PUBLIC_KEY",
  refreshTokenPrivateKey: "JWT_REFRESH_TOKEN_PRIVATE_KEY",
  refreshTokenPublicKey: "JWT_REFRESH_TOKEN_PUBLIC_KEY",
};

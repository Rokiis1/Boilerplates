const corsConfig = {
  origin: "http://localhost:3000",
  accessTokenExpiresIn: 15,
  refreshTokenExpiresIn: 60,
  redisCacheExpiresIn: 60,
};

export default corsConfig;

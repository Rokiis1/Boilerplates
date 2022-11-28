require("dotenv").config();
import { createClient } from "redis";

// const redisUrl = "redis://localhost:6379";
const host = process.env.REDIS_HOSTNAME;
const port = process.env.REDIS_PASSWORD;
const password = process.env.REDIS_PASSWORD;

export type RedisClientType = ReturnType<typeof createClient>

myCreateClient(port, host, password): RedisClientType {
 const client: RedisClientType = createClient({
      socket: { port, host, tls: true },
      password: password,
    })
  return client
}
// const redisClient = createClient({
//   socket: {
//     tls: true,
//     host,
//     port,
//     password,
//   },
// });

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis client connect successfully");
    redisClient.set("try", "Welcome to Express and TypeScript with Prisma");
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

export default redisClient;

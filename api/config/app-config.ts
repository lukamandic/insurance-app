import { cleanEnv, str, num } from "envalid";

export const appConfig = cleanEnv(process.env, {
  NODE_ENV: str({ default: "development" }),
  PORT: num({ default: 7000 }),
  BASE_URL: str({ default: "http://localhost:7000" }),
});

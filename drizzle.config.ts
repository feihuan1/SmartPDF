import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} as Config;

// npx drizzle-kit push:pg
// npx drizzle-kit studio
// npm install dotenv

//  access drizzle studio using these domain, dont use 0.0.0.0:4983
// http://localhost:4983
// http://127.0.0.1:4983
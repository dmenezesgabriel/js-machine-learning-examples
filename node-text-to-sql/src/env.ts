import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  USERNAME: z.string().optional(),
  PASSWORD: z.string().optional(),
  PROXY: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("❌ Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables.");
}

export const env = _env.data;

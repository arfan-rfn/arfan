import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
	client: {
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(0),
		NEXT_PUBLIC_AHREFS_ANALYTICS_ID: z.string().min(0),
		NEXT_PUBLIC_BASE_URL: z.string().min(1),
	},

	// For Next.js >= 13.4.4, you only need to destructure client variables:
	experimental__runtimeEnv: {
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
		NEXT_PUBLIC_AHREFS_ANALYTICS_ID: process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_ID,
	}
});
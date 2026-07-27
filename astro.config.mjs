// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://your-domain.com", // 👈 Replace with your actual domain after deployment
	integrations: [sitemap()],
});

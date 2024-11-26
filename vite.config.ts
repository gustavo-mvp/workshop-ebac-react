import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: "dashes",
		},
		preprocessorOptions: {
			sass: {
				api: "modern-compiler",
			},
			scss: {
				api: "modern-compiler",
			},
		},
		devSourcemap: true,
	},
});

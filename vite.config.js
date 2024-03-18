import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "https://social-backend-2fa5.onrender.com",
				// https://github.com/pranto0000/social-media-frontend.git
				changeOrigin: true,
				secure: false,
			},
		},
	},
});

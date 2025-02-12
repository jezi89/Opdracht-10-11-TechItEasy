import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
    plugins: [react(), svgr()], // SVGR moet hier correct worden geïmporteerd
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
        },
    },
});

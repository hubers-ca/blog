import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import morgan from "morgan";

export default defineConfig({
  plugins: [
    {
      name: "morgan-logs",
      configureServer(server) {
        return () => server.middlewares.use(morgan("dev"));
      },
    },
    remix(),
    tsconfigPaths(),
  ],
});

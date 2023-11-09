import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { type ConfigEnv, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import morgan from "morgan";

// This is what is wanted, there's a bug around ENV atm.
// export default defineConfig({
//   plugins: [
//     {
//       name: "morgan-logs",
//       configureServer(server) {
//         return () => server.middlewares.use(morgan("dev"));
//       },
//     },
//     remix(),
//     tsconfigPaths(),
//   ],
// });
export default ({ mode }: ConfigEnv) => {
  // Here we add env vars from .env files to process.env.
  // Note the last arg is a blank string so that all env vars
  // are loaded, not just those starting with "VITE_"
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
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
};

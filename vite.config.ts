import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
   plugins: [
      react({
         // SWC plugin that mirrors babel-plugin-styled-components
         plugins: [
            [
               "@swc/plugin-styled-components",
               {
                  displayName: true,
                  ssr: false, // set to true if you do SSR
                  minify: true,
                  pure: true,
               },
            ],
         ],
      }),
   ],
   resolve: {
      alias: {
         $constants: path.resolve(__dirname, "src/constants"),
         $components: path.resolve(__dirname, "src/components"),
         $assets: path.resolve(__dirname, "src/assets"),
      },
   },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

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
});

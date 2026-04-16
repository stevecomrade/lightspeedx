import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  webExt: {
    // On Windows, the path must be absolute
    chromiumProfile: resolve('.wxt/chrome-data'),
    keepProfileChanges: true,
  }
});

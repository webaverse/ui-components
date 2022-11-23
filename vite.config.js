import path from "path";

import { defineConfig } from "vite";
import {swcReactRefresh} from "vite-plugin-swc-react-refresh";

const isExternal = (id) => !id.startsWith(".") && !path.isAbsolute(id);

export default defineConfig(() => ({
    plugins: [
        swcReactRefresh(),
      ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      formats: ["es"],
    },
    rollupOptions: {
      external: isExternal,
    },
  }
}));
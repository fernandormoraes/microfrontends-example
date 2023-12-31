import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  dev: {
    port: 8083,
  },
  runtime: {
    router: true,
    state: true,
  },
  deploy: {
    microFrontend: true,
  },
  plugins: [appTools(), garfishPlugin()],
});

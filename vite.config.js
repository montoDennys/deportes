import path, {resolve} from 'node:path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import { getPagesContext } from './data';

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context: getPagesContext
        })
    ]
});
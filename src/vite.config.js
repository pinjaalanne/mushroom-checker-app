"use strict";
import { defineConfig } from 'vite'; // Import the 'defineConfig' function from the 'vite' module
import pluginReact from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({ // Use 'defineConfig' without the 'vite' namespace
    plugins: [pluginReact()],
});
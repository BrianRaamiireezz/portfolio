import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import path from 'path';


export default defineConfig(
    {
        plugins: [ react() ],
        resolve: {
            alias: {
                '@components': path.resolve( './src/components' ),
                '@utils': path.resolve( './src/utils' ),
                '@styles': path.resolve( './src/styles' ),
                '@assets': path.resolve( './src/assets' ),
            },
        },
    },
);
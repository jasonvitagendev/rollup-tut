import {RollupOptions} from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';

export default (args: any) =>
    [
        {
            input: 'src/index.ts',
            output: [
                {
                    dir: 'dist',
                    format: 'es',
                    manualChunks: (id) => {
                        console.log(id);
                        if (id.includes('local-lib')) {
                            return 'local-lib';
                        }
                    },
                    sourcemap: args.configEnv === 'development',
                },
            ],
            plugins: [
                typescript(),
                resolve(),
                commonjs(),
                html({
                    fileName: 'index.html',
                }),
            ],
        },
        {
            input: 'src/index2.ts',
            output: [
                {
                    dir: 'dist',
                    format: 'es',
                    manualChunks: (id) => {
                        console.log(id);
                        if (id.includes('local-lib')) {
                            return 'local-lib';
                        }
                    },
                    sourcemap: args.configEnv === 'development',
                },
            ],
            plugins: [
                typescript(),
                resolve(),
                commonjs(),
                html({
                    fileName: 'index2.html',
                }),
            ],
        },
    ] as RollupOptions[];

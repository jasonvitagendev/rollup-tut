import {RollupOptions} from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.ts',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        {
            dir: 'dist/amd',
            format: 'amd',
        },
        {
            dir: 'dist/es',
            format: 'es',
        },
        {
            dir: 'dist/umd',
            format: 'umd',
            name: 'mylibrarytut',
        },
    ],
    plugins: [typescript(), resolve(), commonjs()],
} as RollupOptions;

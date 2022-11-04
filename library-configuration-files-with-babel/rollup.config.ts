import {RollupOptions} from 'rollup';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
        },
        // {
        //     dir: 'dist',
        //     format: 'amd',
        // },
        // {
        //     dir: 'dist',
        //     format: 'es',
        // },
        // {
        //     dir: 'dist',
        //     format: 'umd',
        //     name: 'mylibrarytut',
        // },
        // {
        //     dir: 'dist',
        //     format: 'iife',
        //     name: 'mylibrarytut',
        // },
    ],
    plugins: [
        babel({
            babelHelpers: 'runtime',
        }),
    ],
    external: (id: string) => id.includes('@babel/runtime'),
} as RollupOptions;

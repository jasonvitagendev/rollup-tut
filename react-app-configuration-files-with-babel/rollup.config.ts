import {RollupOptions} from 'rollup';
import babel from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.js',
    output: [
        // {
        //     dir: 'dist',
        //     format: 'cjs',
        // },
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
        {
            dir: 'dist',
            format: 'iife',
            name: 'mylibrarytut',
        },
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: /node_modules/,
        }),
        resolve(),
        commonjs(),
        html({
            template: (templateOptions) => {
                console.log(templateOptions.bundle);
                return `
                    <!doctype html><html lang="en"><head></head><body><div id="app"></div>
                    ${Object.keys(templateOptions.bundle).reduce(
                        (acc, next) =>
                            (acc += `<script src="${next}"></script>`),
                        ''
                    )}
                    </body>
                    </html>
                `;
            },
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
} as RollupOptions;

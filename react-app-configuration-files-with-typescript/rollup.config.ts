import {RollupOptions} from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';

export default (args: any) =>
    [
        {
            input: 'src/index.tsx',
            output: [
                {
                    dir: 'dist',
                    format: 'es',
                    sourcemap: args.configEnv === 'development',
                },
            ],
            plugins: [
                typescript(),
                resolve(),
                commonjs(),

                html({
                    template: (templateOptions) => {
                        return `
                    <!doctype html><html lang="en"><head></head><body><div id="app"></div>
                    ${templateOptions!.files.js.reduce(
                        (acc, next) =>
                            (acc += `<script src="${next.fileName}"></script>`),
                        ''
                    )}                    
                    </body>
                    </html>    
                `;
                    },
                }),
                replace({
                    'process.env.NODE_ENV': JSON.stringify(args.configEnv),
                }),
            ],
        },
    ] as RollupOptions[];

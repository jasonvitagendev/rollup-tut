export default (args) => {
    console.log(args);

    return {
        input: 'index.js',
        output: {
            dir: './dist',
            format: 'cjs',
        },
    };
};

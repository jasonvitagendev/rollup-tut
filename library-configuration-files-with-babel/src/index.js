export * from './lib.js';
export * from './lib2.js';

Promise.resolve('haha').then();

console.log('testing'.includes('haha'));

(async () => {
    console.log('yo');
})();

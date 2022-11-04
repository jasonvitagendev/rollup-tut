rm -r dist/*

rollup --config rollup.config.ts --configPlugin typescript --configEnv development --watch

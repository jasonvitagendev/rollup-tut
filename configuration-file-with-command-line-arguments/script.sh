rm -r dist/*

rollup --config rollup.config.ts --configPlugin typescript --configPresent --configEnv production

rm -r dist/*

rollup index.js -f amd -d dist --chunkFileNames [name]-[hash].[format].js

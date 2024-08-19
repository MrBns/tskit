import { defineConfig, LibraryOptions } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: './src/main.ts',
			formats: ['es']
		} as LibraryOptions
	}
});

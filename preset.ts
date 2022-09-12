export default definePreset({
	name: 'simple-no-import-preset',
	handler: async() => {
		await editFiles({
			files: '.gitignore',
			operations: [
				{
					type: 'add-line',
					lines: ['.env.local', '.env.*.local'],
					position: 'append',
					indent: true,
				},
			],
		});
	},
})

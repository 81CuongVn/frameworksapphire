import { runGenerator } from '@discordjs/ts-docgen';

runGenerator({
	existingOutput: 'docs/typedoc-out.json',
	custom: 'docs/index.yml',
	output: 'docs/framework.json',
	verbose: true,
	spaces: 4
});

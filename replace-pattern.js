const pattern = Deno.args[0];
const substitute = Deno.args[1];
const filename = Deno.args[2];

if (!!pattern && !!substitute && !!filename) {
	// console.log(`To replace ${pattern} with ${substitute}, in ${filename}!`);
	let content = await Deno.readTextFile(filename);
	const filter = (substitute.indexOf('--filter=') == 0) ? JSON.parse(substitute.replace('--filter=', '')) : null;
	const percolate = specimen => {
		for (let criteria in filter) {
			specimen = specimen.replace(criteria, filter[criteria])
		}
		return specimen
	}
	let chunks = content.match(new RegExp(pattern, 'g'));
	if (!!chunks && chunks.length > 0) {
		for (let i = 0; i < chunks.length; i++) {
			if (filter != null) { 
				let supplant = percolate(chunks[i]);
				content = content.replace(chunks[i], supplant);
			} else {
				content = content.replace(chunks[i], substitute);
			}
		}
		await Deno.writeTextFile(filename, content);
		console.log('Replaced matches!');
	} else {
		console.log('No match found!');	
	}
} else {
	console.log(`
Replace Pattern (v1.0.0)

A tool to replace given pattern with substitute inside file.

Syntax:
  replace-pattern <pattern> <substitute> <file>
  replace-pattern <pattern> --filter=<criteria> <file>

Options:
  --filter    Criteria to modify the matched chunk 

Usages:
  replace-pattern 'foo' 'bar' file.txt
  replace-pattern '\\/\\{[a-zA-Z0-9_-]+\\}' '--filter={"{":"&#123;","}":"&#125;"}' file.txt
	`);
}

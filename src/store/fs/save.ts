import * as assert from 'assert';
import { createWriteStream, promises } from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import { promisify } from 'util';

const { symlink, writeFile } = promises;
const mkdirpp = promisify(mkdirp);

const defaults = {
	cwd: process.cwd(),
	base: '.',
	encoding: 'utf8'
}

export default function save(options = {}) {
	const orgOptions = Object.assign({}, defaults, options);

	return async function save(entry: any) {
		assert.ok(entry);
		const options = Object.assign({}, orgOptions, entry.options);

		// If no contents then do nothing
		if (entry.contents === undefined) return;

		const filename = path.resolve(options.cwd, options.base, entry.path);
		const dirname = path.dirname(filename);
		await mkdirpp(dirname);

		// Write it as a symlink
		if (entry.type === 'symbolic')
			return symlink(filename, entry.contents.filename, entry.contents.linkType);

		// If directory then mkdirp it
		if (entry.type === 'directory')
			return mkdirpp(filename);

		// Stream it to disk yo
		if (entry.type === 'stream')
			return new Promise((resolve, reject) => {
				entry.contents
				.pipe(createWriteStream(filename))
				.on('end', resolve)
				.on('error', reject);
			});

		// Write it like normal
		return writeFile(filename, entry.contents, options);
	}
}

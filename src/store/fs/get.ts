import * as assert from 'assert';
import resolve from './resolve';
import removeBomStream from 'remove-bom-stream';
import removeBomBuffer from 'remove-bom-buffer';
import { Readable } from 'lazystream';
import { createReadStream, promises } from 'fs';

const { lstat, readdir, readFile, readlink, stat } = promises;

export default function get(options: any = {}) {
	return async function get(id: string): Promise<any> {
		assert.ok(id);
		const filename = resolve(id, options);

		const stats = options.resolveSymlinks ?
			await stat(filename) : await lstat(filename);

		if (stats.isSymbolicLink())
			return {
				id,
				type: 'symlink',
				mode: stats.mode,
				options: {stats},
				contents: !options.read ?
					null :
					await readlink(filename, options)
			};

		if (stats.isDirectory())
			return {
				id,
				type: 'dir',
				mode: stats.mode,
				options: {stats},
				contents: !options.read ?
					null:
					await readdir(filename, options)
			};

		if (stats.isFile()) {
//			return readFile(id, stats, options);
			const entry = {
				id,
				options: {stats},
				type: 'file',
				mode: stats.mode,
				streamed: !options.buffer,
				contents: !options.read ?
					null :
					options.buffer ?
						await readFile(filename, options) :
						new Readable(() => createReadStream(filename, options))

			};

			if (options.removeBOM && options.buffer)
				entry.contents = removeBomBuffer(entry.contents);

			if (options.removeBOM && !options.buffer)
				entry.contents = entry.contents.pipe(removeBomStream);

			return entry;
		}

		return null;

		//if (stats.isFIFO())
		//if (stats.isSocket())
		//if (stats.isBlockDevice())
		//if (stats.isCharacterDevice())
	};
};

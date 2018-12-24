import path from 'path';

export default function resolve(id, options) {
	return path.resolve(options.cwd, options.base, id);
}

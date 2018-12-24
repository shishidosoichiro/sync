import test from 'ava';
import * as mkdirp from 'mkdirp';
import create from '../../../src/store/fs/remove';
import { promises } from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';

const { readFile } = promises;
const rimrafp = promisify(rimraf);
const base = path.resolve(path.relative(process.cwd(), __dirname), '.data/remove');

test.beforeEach(async => {
	return rimrafp(base);
});

test('should return a function', async t => {
	const doCreate = await create();
	t.is(typeof doCreate, 'function');
});

test('\'s reaturn should write a file.', async t => {
	const doCreate = await create({ base });
	const entry = {
		path: 'test01/test01.txt',
		contents: 'test01'
	};
	await doCreate(entry);
	const contents = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents, entry.contents);
});

test('\'s reaturn should throw a error, when it writes a file already existing.', async t => {
	const doCreate = await create({ base });
	const entry = {
		path: 'test02/test02.txt',
		contents: 'test02'
	};
	await doCreate(entry);
	const contents = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents, entry.contents);
	entry.contents = 'test02-01';
	await doCreate(entry);
	const contents2 = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents2, entry.contents);
});

test.afterEach(async => {
	return rimrafp(base);
});

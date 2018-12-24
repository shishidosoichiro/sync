import test from 'ava';
import * as mkdirp from 'mkdirp';
import save from '../../../src/store/fs/save';
import { promises } from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';

const { readFile } = promises;
const rimrafp = promisify(rimraf);
const base = path.resolve(path.relative(process.cwd(), __dirname), '.data/save');

test.beforeEach(async => {
	return rimrafp(base);
});

test('should return a function', async t => {
	const doSave = await save();
	t.is(typeof doSave, 'function');
});

test('\'s reaturn should write a file.', async t => {
	const doSave = await save({ base });
	const entry = {
		path: 'test01/test01.txt',
		contents: 'test01'
	};
	await doSave(entry);
	const contents = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents, entry.contents);
});

test('\'s reaturn should throw a error, when it writes a file already existing.', async t => {
	const doSave = await save({ base });
	const entry = {
		path: 'test02/test02.txt',
		contents: 'test02'
	};
	await doSave(entry);
	const contents = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents, entry.contents);
	entry.contents = 'test02-01';
	await doSave(entry);
	const contents2 = await readFile(path.resolve(process.cwd(), base, entry.path), 'utf8');
	t.is(contents2, entry.contents);
});

test.afterEach(async => {
	return rimrafp(base);
});

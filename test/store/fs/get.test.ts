import test from 'ava';
import * as mkdirp from 'mkdirp';
import get from '../../../src/store/fs/get';
import { promises } from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';

const { readFile } = promises;
const rimrafp = promisify(rimraf);
const base = path.resolve(path.relative(process.cwd(), __dirname), '.data/get');

//test.beforeEach(async => {
//	return rimrafp(base);
//});

test('should return a function', async t => {
	const doGet = await get();
	t.is(typeof doGet, 'function');
});

test('\' return value should return a contents', async t => {
	const doGet = await get({base, read: true, buffer: true});
	const entry = await doGet('.data/test01.txt');
	t.is(entry.contents, 'test02');
});

//test.afterEach(async => {
//	return rimrafp(base);
//});

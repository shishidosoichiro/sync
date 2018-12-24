export default class Entry {
	id: string;
	options: object;
	contents: any;

	constructor(id, options, contents) {
		this.id = id;
		this.options = options;
		this.contents = contents;
	}
}

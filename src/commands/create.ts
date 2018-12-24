import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'create a entry'

  static examples = [
    `$ sync create << user.yaml
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    file: flags.string({char: 'f', description: 'a entry file.'})
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Create)

		if ()
    const name = flags.file || 'world'
    this.log(`hello ${name} from ./src/commands/hello.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

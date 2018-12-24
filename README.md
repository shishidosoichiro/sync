sync
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sync.svg)](https://npmjs.org/package/sync)
[![CircleCI](https://circleci.com/gh/shishidosoichiro/sync/tree/master.svg?style=shield)](https://circleci.com/gh/shishidosoichiro/sync/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/shishidosoichiro/sync?branch=master&svg=true)](https://ci.appveyor.com/project/shishidosoichiro/sync/branch/master)
[![Codecov](https://codecov.io/gh/shishidosoichiro/sync/branch/master/graph/badge.svg)](https://codecov.io/gh/shishidosoichiro/sync)
[![Downloads/week](https://img.shields.io/npm/dw/sync.svg)](https://npmjs.org/package/sync)
[![License](https://img.shields.io/npm/l/sync.svg)](https://github.com/shishidosoichiro/sync/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sync
$ sync COMMAND
running command...
$ sync (-v|--version|version)
sync/0.0.0 darwin-x64 node-v10.14.1
$ sync --help [COMMAND]
USAGE
  $ sync COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sync create [FILE]`](#sync-create-file)
* [`sync hello [FILE]`](#sync-hello-file)
* [`sync help [COMMAND]`](#sync-help-command)

## `sync create [FILE]`

describe the command here

```
USAGE
  $ sync create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sync hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/create.ts](https://github.com/shishidosoichiro/sync/blob/v0.0.0/src/commands/create.ts)_

## `sync hello [FILE]`

describe the command here

```
USAGE
  $ sync hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sync hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/shishidosoichiro/sync/blob/v0.0.0/src/commands/hello.ts)_

## `sync help [COMMAND]`

display help for sync

```
USAGE
  $ sync help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->

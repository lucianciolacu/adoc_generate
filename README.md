adoc_generate
=============

Scaffolding tool to generate AsciiDoctor files in the Antora structure.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/adoc_generate.svg)](https://npmjs.org/package/adoc_generate)
[![Downloads/week](https://img.shields.io/npm/dw/adoc_generate.svg)](https://npmjs.org/package/adoc_generate)
[![License](https://img.shields.io/npm/l/adoc_generate.svg)](https://github.com/lucianciolacu/adoc_generate/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g adoc_generate
$ adoc_generate COMMAND
running command...
$ adoc_generate (-v|--version|version)
adoc_generate/0.0.2 linux-x64 node-v10.16.0
$ adoc_generate --help [COMMAND]
USAGE
  $ adoc_generate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`adoc_generate generate`](#adoc_generate-generate)
* [`adoc_generate help [COMMAND]`](#adoc_generate-help-command)

## `adoc_generate generate`

Generates the Antora Structure

```
USAGE
  $ adoc_generate generate

OPTIONS
  -n, --reponame=reponame  Name of the repository
```

_See code: [src/commands/generate.js](https://github.com/lucianciolacu/adoc_generate/blob/v0.0.2/src/commands/generate.js)_

## `adoc_generate help [COMMAND]`

display help for adoc_generate

```
USAGE
  $ adoc_generate help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->

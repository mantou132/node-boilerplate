#!/usr/bin/env node

import path from 'path';

import program from 'commander';
import colors from 'colors';

import { add } from './lib/add';

program.version(require(path.resolve(__dirname, '../package.json')).version || '', '-v, --version');

program
  .command('add <n1> [n2]')
  .description('The sum of two numbers')
  .action(async (n1: number, n2 = 0) => {
    console.log(colors.green(String(add(n1, n2))));
  });

program.on('command:*', () => {
  console.error(
    colors.red('Invalid command: %s\nSee --help for a list of available commands.'),
    program.args.join(' '),
  );
  process.exit(1);
});

program.parse(process.argv);

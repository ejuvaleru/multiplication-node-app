import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        describe: 'Multiplication limit',
        default: 10
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        describe: 'Show multiplication table',
        default: false
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        describe: 'File name',
        default: 'multiplication-table'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        describe: 'File destination path',
        default: 'outputs'
    })
    .check((argv, options) => {
        if(argv.b < 1) throw 'Error: base must be greater than 0';

        return true;
    })
    .parseSync();
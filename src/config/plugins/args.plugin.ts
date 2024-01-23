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
    .check((argv, options) => {
        if(argv.b < 1) throw 'Error: base must be greater than 0';

        return true;
    })
    .parseSync();
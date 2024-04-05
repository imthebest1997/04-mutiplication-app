import yargs from 'yargs';
import { hideBin } from "yargs/helpers";

export const yarg = yargs( hideBin(process.argv) )
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Multiplication table base',
        demandOption: true
    })
    .option('l', {
        alias: "limit",
        type: 'number',
        describe: 'Multiplication table limit',
        default: 10        
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        describe: 'Show the multiplication table',
        default: false
    })

    .option('n',{
        alias: 'name',
        type: 'string',
        describe: 'File name',
        default: 'multiplication-table'
    })

    .option('d',{
        alias: 'destination',
        type: 'string',
        describe: 'File destination',
        default: './outputs'
    })
    .check( (argv, options) => {

        if ( isNaN( argv.b ) ) {
            throw 'The base must be a number';
        }
        if ( isNaN( argv.l ) ) {
            throw 'The limit must be a number';
        }

        if(argv.b < 1 ) {
            throw 'The base must be greater than 0.';
        }

        return true;
    })
    .parseSync()
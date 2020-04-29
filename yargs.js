const yargs = require('yargs'); //`npm i yargs` -- > package.json + node_module
const argv = yargs
    .command('lyr', 'Tells whether an year is leap year or not', {
        year: {
            description: 'the year to check for',
            alias: 'y',
            type: 'number',
        }
    })
    .option('time', {
        alias: 't',
        description: 'Tell the present Time',
        type: 'boolean',
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv.time) {
    console.log('The current time is: ', new Date().toLocaleTimeString());
}

if (argv._.includes('lyr')) {
    const year = argv.year || new Date().getFullYear();
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is NOT a Leap Year`);
    }
}

console.log(argv);

/*A summary of elements used in the program:

    argv: This is the modified process.argv which
    we have configured with yargs.
    command(): This method is used to add commands,
     their description and options which are specific to
     these commands only, like in the above code lyr is the
     command and -y
    is lyr specific option: node myapp.js lyr -y 2016
    option(): This method is used to
    add global options(flags) which can be accessed by all
    commands or without any command.
    help(): This method is used to display a help dialogue
    when --help option is encountered which contains description
    of all the commands and options available.
    alias(): This method provides an alias name to an option,
    like in the above code both --help and -h triggers the help dialogue.
*/
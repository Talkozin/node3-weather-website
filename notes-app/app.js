const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')



// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
    notes.addNote(argv.title, argv.body)
    }
})

debugger

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a given note',
    builder: {
        title: {
        describe: 'notes.title',
        demandOption: true,
        type: 'string'
    }},

    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()
// add, remove, read, list

    
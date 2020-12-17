const yargs = require('yargs')
const person = require('./person.js')
const chalk = require('chalk')

yargs.version('1.7.8')

//command for add person
yargs.command({
    command : 'add',
    describe : 'Used to add new person',
    builder: {
        name : {
            describe : "Person name to add",
            demandOption : true,
            type: 'string'
        },
        phone : {
            describe : "Person phone number to add ",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        person.addPerson(argv.name,argv.phone)
    }
})

//command for delete person
yargs.command({
    command : "delete",
    describe : "Used to delete select person",
    builder: {
        name : {
            describe : "Person name to delete",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        person.deletePerson(argv.name)
    }
})

//command for show person
yargs.command({
    command : "show",
    describe : "Person to be shown",
    builder: {
        name : {
            describe : "Person name to list",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        person.showPerson(argv.name)
    }
})

//command for list people
yargs.command({
    command : "list",
    describe : "People to be list",
    handler(argv) {
        person.listPerson()
    }
})

// console.log(yargs.argv)
yargs.parse()










// console.log(process.argv)
// console.log(process.argv[2])
// console.log(process.argv[3])
//
// let waitingCommand = process.argv[2]
//
// if(waitingCommand == 'ekle'){
//     console.log("Eklendi")
// }

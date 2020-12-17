const fs = require('fs')
const chalk = require('chalk')


const addPerson = (name, phone) => {
    // console.log("name: " + name + " Phone number: " + phone)
    const people = readPersonFromFile()

    const sameNamePerson = people.filter((person) => {
        return person.name === name;
    })

    if(sameNamePerson.length === 0) {
    people.push({
        name,
        phone
     })
    writePersonToFile(people)
    }else{
        console.log(chalk.log.inverse(name+" has been saved!"))
    }
}

const writePersonToFile = (people) => {
    const jsonData = JSON.stringify(people)
    fs.writeFileSync('people.json', jsonData)
}

const readPersonFromFile = () => {
    try {
    const dataBuffer = fs.readFileSync('people.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const deletePerson = (name) => {
    // console.log("Person to be deleted "+name)
    const allPeople = readPersonFromFile()
    const notDeletePerson = allPeople.filter((person) => {
        return person.name !== name
    })
    if(allPeople.length > notDeletePerson.length) {
        console.log(chalk.green.inverse("Person deleted!"))
       writePersonToFile(notDeletePerson)
    }else {
        console.log(chalk.red.inverse(name + "is not found!"))
    }



}

const showPerson = (name) => {
    // console.log("Person to be show"+name)
    const allPeople = readPersonFromFile()
    const findPerson = allPeople.find((person) => {
        return person.name === name
    })
    if(findPerson) {
        console.log(chalk.yellow.inverse("The phone number of the person you are search "+ findPerson.phone))
    }else {
        console.log(chalk.red.inverse("The person you are looking for not be found"))
    }

}

const listPerson = () => {
   // console.log("People to be list")
    const allPeople = readPersonFromFile()
    allPeople.forEach((person) => {
        console.log(chalk.green.inverse("✨Name : "+person.name+ " 🤙Phone number : "+person.phone))
    })
}


// exports.addPerson = addPerson
// exports.deletePerson = deletePerson
// exports.showPerson = showPerson
// exports.listPerson = listPerson

module.exports = {
    addPerson : addPerson,
    deletePerson : deletePerson,
    showPerson : showPerson,
    listPerson : listPerson
}

const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
const notes = loadNotes()
const duplicateNote = notes.find((note) => note.title === title)


debugger


if (!duplicateNote) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
} else {
    console.log(chalk.red.inverse('Note title taken...'))
}
}

debugger


const removeNote = (title) => {
   const notes = loadNotes()
   const notesToKeep = notes.filter((note) => note.title !== title)

if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen('Note removed...'))
    saveNotes(notesToKeep)
} else {console.log(chalk.bgRed('not found')) }    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bgYellow('Your Notes'))

    notes.forEach((note) => {
     console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes= () => {
try {   
     const dataBuffer = fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)

} catch(e) {
 return[]
}
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse("Note not found..."))

    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}

    
import fs from 'node:fs'

const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (values) => {
    if (values.length > 1){
        console.log("Erreur: il faut 1 seul argument pour ce programme")
        return false
    }
    return true
}

const readFile = (filename) => {
    const content = fs.readFileSync(filename[0], {encoding:'utf8'})
    return content
}

const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(readFile(getArgument()))
    }
}

resultat()

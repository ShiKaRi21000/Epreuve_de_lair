function getArgument () {
    return process.argv.slice(2)
}

function isValidArguments (arguments) {
    if (arguments.length > 1){
        console.log("Erreur: il faut 1 argument minimum pour ce programme")
        return false
    }
    return true
}

function skipUniqueAdjacentCharactere (string){
    const oldString = string[0]
    let newString = ""
    for (let i = 0; i < oldString.length; i++){
        if(oldString[i] !== oldString[i + 1]){
            newString += oldString[i]
        }
    }
    return newString
}

function resultat(){
    if(isValidArguments(getArgument())){
        console.log(skipUniqueAdjacentCharactere(getArgument()))
    }
}

resultat()
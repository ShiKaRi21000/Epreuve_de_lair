function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length !== 2){
        console.log("Erreur: il faut seulement 2 arguments pour ce programme")
        return false
    }
    for (let i = 0; i < arguments.length; i++){
        if (!isNaN(arguments[i])){
            console.log("Erreur: il faut que des mots pour que ce programme fonctionne.")
            return false
        }
    }
    return true
}

function slice(string, splitWord){
    const array = string[0]
    let splitBegin = []
    let splitEnd = []
    if(array.includes(splitWord)){
        splitEnd.push(array.slice(array.indexOf(splitWord) + splitWord.length + 1))
        splitBegin.push(array.substr(0, array.indexOf(splitWord) + splitWord.length - 1))
    }
    let newArray = splitBegin.concat("\n")
    let finalyArray = newArray.concat(splitEnd)
    return finalyArray.join("")
}

function resultat(){
    if(getValidArguments(getArgument())){
        console.log(slice(getArgument(), getArgument().slice(1)))
    }
}

resultat()
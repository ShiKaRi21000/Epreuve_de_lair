function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length > 1){
        console.log("Erreur: il faut 1 seul argument pour ce programme")
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

function split(string, splitCharacter){
    const array = string[0]
    let split = []
    for (let i = 0; i < array.length; i++){
        if(array[i] === " "){
            split.push(splitCharacter)
        }
        else{
            split.push(array[i])
        }
    }
    return split.join("")
}

function resultat(){
    if(getValidArguments(getArgument())){
        console.log(split(getArgument(), "\n" ))
    }
}

resultat()
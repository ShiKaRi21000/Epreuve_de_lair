function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length < 1){
        console.log("Erreur: il faut seulement 2 arguments minimum pour ce programme")
        return false
    }
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] === " "){
            return true
        }

        else if (!isNaN(arguments[i])){
            console.log("Erreur: il faut que des mots pour que ce programme fonctionne.")
            return false
        }
    }
    return true
}

function concat(arguments, splitWord){
    let tempArray = arguments
    let newArray = []
    for(let i = 0; i < arguments.length; i++){
        newArray.push(tempArray[i])
        if(i < arguments.length - 1){
            newArray.push(splitWord)
        }
    }
    return newArray.join(" ")
}

function resultat(){
    if(getValidArguments(getArgument())){
        console.log(concat(getArgument(), getArgument().slice(-1)))
    }
}

resultat()
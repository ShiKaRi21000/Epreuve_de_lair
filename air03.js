function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length < 1){
        console.log("Erreur: il faut seulement 2 arguments minimum pour ce programme")
        return false
    }
    return true
}

function comparaison(arguments){
    const tempArray = arguments
    let multipleValues = []
    let uniqueValue = []
    for(let i = 0; i < tempArray.length; i++){
        const occurence = tempArray[i]
        if (multipleValues[occurence]){
            multipleValues[occurence] ++
        }
        else {
            multipleValues[occurence] = 1
        }
    }
    for(const occurence in multipleValues){
        if (multipleValues[occurence] === 1){
            uniqueValue.push(occurence)
        }
    }
    return uniqueValue
}

function resultat(){
    if(getValidArguments(getArgument())){
        console.log(comparaison(getArgument()))
    }
}

resultat()
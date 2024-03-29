const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (arguments) => {
    if (arguments.length < 1){
        console.log("Erreur: il faut 2 arguments minimum pour ce programme")
        return false
    }
    return true
}

const maRotation = (array) => {
    const oldArray = array
    const newArray = oldArray.slice(1)
    newArray.push(oldArray[0])
    return newArray
}

const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(maRotation(getArgument()))
    }
}

resultat()
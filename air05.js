const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (arguments) => {
    if (arguments.length <= 1){
        console.log("Erreur: il faut au moins 2 arguments pour ce programme")
        return false
    }
    for (let i = 0; i < arguments.length; i++)
        if(isNaN(arguments[i])){
            return false
        }
    return true
}

const soustraction = (array, calculateur) => {
    const newArray = []
    for (let i = 0; i < array.length - 1; i++){
            newArray.push(parseInt(array[i]) - parseInt(calculateur[0].slice(1)))
        }
    return newArray
}

const addition = (array, calculateur) => {
    const newArray = []
    for (let i = 0; i < array.length - 1; i++){
            newArray.push(parseInt(array[i]) + parseInt(calculateur[0].slice(1)))
        }
    return newArray
}



const resultat = (signe) => {
    if(isValidArguments(getArgument())){
        if(signe[0][0] === "+"){
            return console.log(addition(getArgument(), getArgument().slice(-1)))
        }
        else if(signe[0][0] === "-"){
            return console.log(soustraction(getArgument(), getArgument().slice(-1)))
        }
    }
}

resultat(getArgument().slice(-1))
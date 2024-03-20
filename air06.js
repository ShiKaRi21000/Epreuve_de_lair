const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (arguments) => {
    if (arguments.length < 1){
        console.log("Erreur: il faut 1 argument minimum pour ce programme")
        return false
    }
    return true
}

const skipWordInArray = (array, skipString) => {
    const newArray = array
    const skipArray = []
    for (let i = 0; i < newArray.length; i++){
        let containValue = false
        for (let j = 0; j < newArray[i].length; j++) {
            if(newArray[i][j] === skipString[0]){
                containValue = true
            }
        }
        if(!containValue) {
            skipArray.push(newArray[i])
        }
    }
    return skipArray
}
const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(skipWordInArray(getArgument(), getArgument().slice(-1)))
    }
}

resultat()

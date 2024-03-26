const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (arguments) => {
    if (arguments.length < 1){
        console.log("Erreur: il faut 2 arguments minimum pour ce programme")
        return false
    }
    if(!arguments.includes("fusion")){
        console.log("Erreur: il n'y a pas de fusion pour pouvoir fusionner les 2 listes/tableaux")
        return false
    }
    return true
}

const array1 = (arguments) => {
    const newArray = []
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] === "fusion"){
            break
        }
        newArray.push(arguments[i])
    }
    return newArray
}

const array2 = (arguments) => {
    const tempNewArray = []
    let newArray
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] === "fusion"){
            tempNewArray.push(arguments.slice([i + 1]))
        }
    }
    newArray = tempNewArray[0]
    return newArray
}

const sortedFusion = (array1, array2) => {
    const newArray = []
    let i = 0
    let j = 0

    while (i < array1.length && j < array2.length){
        if(array1[i] < array2[i]){
            newArray.push(array1[i])
            newArray.push(array2[j])
            i++
            j++
        }
        else {
            newArray.push(array2[j])
            newArray.push(array1[i])
            i++
            j++
        }
    }
    return newArray
}

const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(sortedFusion(array1(getArgument()), array2(getArgument())))
    }
}

resultat()
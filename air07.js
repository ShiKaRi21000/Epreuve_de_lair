const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (arguments) => {
    if (arguments.length < 1){
        console.log("Erreur: il faut 2 arguments minimum pour ce programme")
        return false
    }

    for (let i = 0; i < arguments.length; i++)
        if(isNaN(arguments[i])){
            console.log("Erreur: il faut des chiffres ou des nombres pour ce programme")
            return false
        }
    return true
}

const my_bubble_sort = (arr) => {
    let new_array = arr
    for (let i = 0; i < new_array.length; i++) { 
        for (let j = 0; j < (new_array.length - i - 1); j++) {
            if (parseInt(new_array[j]) > parseInt(new_array[j + 1])){
                [new_array[j], new_array[j + 1]] = [new_array[j + 1], new_array[j]]
            }
        }
    }
    return new_array
}

const sortedInsert = (array, newElement) => {
    const newArray = array
    const element = newElement[0]
    newArray.push(element)
    my_bubble_sort(newArray)
    return newArray
}

const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(sortedInsert(getArgument().slice(0, -1), getArgument().slice(-1)))
    }
}

resultat()
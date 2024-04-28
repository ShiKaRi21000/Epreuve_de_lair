const getArgument = () => {
    return process.argv.slice(2)
}

const isValidArguments = (array) => {
    if (array.length > 2){
        console.log("Erreur: il faut 2 arguments uniquement pour ce programme")
        return false
    }
    if (!isNaN(array[0])){
        console.log("Erreur: il faut que le prmeier argument soit un caractère")
        return false
    }
    if (isNaN(array[1])){
        console.log("Erreur: il faut que le deuxième argument soit un chiffre")
        return false
    }
    return true
}

const pyramide = (caractere, nombre) => {
    const temp = " "
    for (let i=0; i < parseInt(nombre); i++){
        console.log(temp.repeat(parseInt(nombre - i)), caractere.repeat(i) + caractere.repeat(1 + i), temp.repeat(parseInt(nombre - i)))
    }
}

const resultat = () => {
    if(isValidArguments(getArgument())){
        console.log(pyramide(getArgument()[0],getArgument().slice(-1)[0]))
    }
}

resultat()

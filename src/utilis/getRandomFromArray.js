
const getRandomFromArray = arr => {
    
    const indexRandom = Math.floor(Math.random() * arr.length)

    return arr[indexRandom]

    //return arr[Math.floor(Math.random() * arr.length)]
}

export default getRandomFromArray

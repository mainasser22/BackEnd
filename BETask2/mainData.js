const fs = require("fs")
const addPersons = (id, fname , lname , city , age ) => {
       const allData = loadData()

        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname: lname,
            city : city,
            age : age
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
}
const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("data.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

}
  
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data.json" , saveAllDataJson)
}
const deleteData = () => {
    const allData = loadData()
    const dataToKeep = allData.filter((person) => {
        return person.id !== 4 && person.id !== 5 && person.id !== 6
    })
    saveAllData(dataToKeep)
}

const listData = () => {
    const allData = loadData()

    allData.forEach ((person) => {
        console.log(person.fname , person.lname)
    })
}

const readData = () => {
    const allData = loadData()

    const itemNeeded = allData.find((person) => {
         return person.id == 5 
    })
    console.log(itemNeeded)

}

module.exports = {
    addPersons,
    deleteData,
    listData,
    readData
}
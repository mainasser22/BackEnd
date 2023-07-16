const yargs = require("yargs")
const mainData = require("./mainData")


yargs.command({
    command: "add7",
    describe: "Adding Persons",
    builder: {
        id: {
            describe: "ID",
            type: "string"
        },
        fname: {
            describe: "First name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "Last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "City",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        // console.log("Enter person number",i)
        mainData.addPersons(x.id, x.fname, x.lname, x.city, x.age)
    }
})

yargs.command({
    command: "delete4-6",
    describe: "DeleteItems",
    handler: () => {
        mainData.deleteData()
    }
})

yargs.command({
    command: "list",
    describe: "list data",
    handler: () => {
        mainData.listData()
    }
})
yargs.command({
    command: "read5",
    describe: "to read data",
    handler: () => {
        mainData.readData()
    }
})
yargs.parse() 
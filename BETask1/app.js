/*Create object */
const person = {
    fname: "ahmed",
    lname: "hossam",
    age: 20,
    city: "alex"
};
/*Change to json */
const json_obj = JSON.stringify(person);
/*store in file */
const fs = require("fs");
fs.writeFileSync("storage.json", json_obj);
/*Read file */
console.log(fs.readFileSync("storage.json").toString());
/*convert to obj */
const updatedPerson = JSON.parse(json_obj);
console.log(updatedPerson);
/*Update data */
updatedPerson.fname = "adel";
updatedPerson.lname = "ahmed";
updatedPerson.age = 40;
updatedPerson.city = "cairo";
/*convert obj to json */
const json_obj2 = JSON.stringify(updatedPerson);
/*store in file */
fs.writeFileSync("storage.json", json_obj2);






//mongod.exe --dbpath \Users\dennis\mongo-data

//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// ES6 Object Destructerion oder so
/*let user = {name:'dennis', age: 27};
let {name} = user;
console.log(name);*/

/*let obj = new ObjectID();
console.log(obj);*/

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if(error) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    // Insert Document Todo
    db.collection("Todos").insertOne({
        text: "Do Something",
        completed: false
    }, (error, result) => {
        if(error) {
            return console.log("Unable to insert todo:", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // Insert Document User
/*    db.collection("Users").insertOne({
        name: "Dennis",
        age: 27,
        location: "MG-Actiontown"
    }, (error, result) => {
        if(error) {
            return console.log("Unable to insert todo:", err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    }); */
    db.close();
});

// MongoDB module v3
/*MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db("TodoApp");

    db.collection("Todos").insertOne({
        text: "Do Somethin",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Unable to connect to MongoDB Server");
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});*/

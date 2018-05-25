//mongod.exe --dbpath \Users\dennis\mongo-data
const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if(error) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    db.collection("Todos").find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });

    db.collection("Users").find({
        name: "Dennis"
    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });

    /*db.collection("Todos").find({
        _id: new ObjectID("5af55cb687a814c1101b25d9")
    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });*/

    db.close();

});


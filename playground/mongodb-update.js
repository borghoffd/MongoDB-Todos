const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if(error) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    /*db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5b1e6bbe744ac1658cb189b8")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5afae6ee705c9676a9a9a91b")
    }, {
        $set: {
            name: "Dennis"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();

});


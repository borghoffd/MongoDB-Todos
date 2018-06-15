const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
    if(error) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    //deleteMany
    /*db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result) => {
        console.log(result);
    });*/
    //deleteOne
/*    db.collection("Todos").deleteOne({text:"Do Something"}).then((result) => {
        console.log(result);
    });*/
    //findOneAndDelete
    /*db.collection("Todos").findOneAndDelete({completed: false}).then((result) =>  {
        console.log(result)
    });*/
    db.collection("Users").findOneAndDelete({_id:new ObjectID("5afb01734242fd39c99c73a6")}).then((result) => {
        console.log(result);
    });
    //db.close();

});

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");
const {ObjectID} = require('mongodb');

let id = "5b2147c67573ab7cb18d6839";

if(!ObjectID.isValid(id)) {
    console.log("ID is not valid!");
} else {
    User.findById(id).then((user) => {
        if(!user) {
            return console.log("ID not found!");
        } else {
            console.log(user);
        }
    }).catch((e) => {
        console.log(e);
    })
}

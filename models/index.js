const mongoose = require("mongoose");
mongoose.set('debug', true);
// mongoose.connect("mongodb://test:a12345@ds161794.mlab.com:61794/todos", { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017/todo-api", { useNewUrlParser: true });
// mongodb://test:<PASSWORD>@cluster0-shard-00-00-lqhsl.mongodb.net:27017,cluster0-shard-00-01-lqhsl.mongodb.net:27017,cluster0-shard-00-02-lqhsl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
mongoose.connect('mongodb+srv://test:test1@cluster0-lqhsl.mongodb.net/', {dbName: 'test', useNewUrlParser: true}); // this is how you connect to mongodb atlas

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");


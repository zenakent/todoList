const express = require("express");
const router = express.Router();
const db = require("../models/index");
const helpers = require("../helpers/todos");



router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);


router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

// router.get('/', (req, res) => {
//      db.Todo.find()
//     .then((todos) => {
//         res.json(todos);
//     }).catch((err) => {
//         res.send(err);
//     });
// });






// router.post('/', function(req, res) {
//     db.Todo.create(req.body)
//     .then(function(newTodo){
//       res.status(201).json(newTodo);
//     })
//     .catch(function(err){
//       res.send(err);
//   })
// })

// router.get('/', function(req, res) {
//     db.Todo.find()
//     .then(function(todos) {
//         res.json(todos);
//     })
//     .catch(function(err) {
//         res.send(err);
//     });
// });

module.exports = router;
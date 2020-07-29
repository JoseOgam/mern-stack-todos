var express = require('express')
var router = express.Router()
var Todo = require('./models')

var Todo = require('./models')
router.post('/todos', async (req, res) => {
  var todo = new Todo(req.body)
  try {
    await todo.save()
    res.status(201).send(todo)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/todos', async (req, res) => {
  try {
    var todo = await Todo.find({})
    res.send(todo)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router

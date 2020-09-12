var express = require("express");
var router = express.Router();
var Todo = require("./models");

var Todo = require("./models");
router.post("/todos", async (req, res) => {
  var todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/todos", async (req, res) => {
  try {
    var todo = await Todo.find({});
    res.send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.patch("/update/:id", (req, res) => {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(404).send("data is not found")
    } else {
      todo.title = req.body.title;
      todo.body = req.body.body;
      todo.completed = req.body.completed;
    }
    todo
      .save()
      .then((todo) => {
        res.json("Todo updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

module.exports = router;

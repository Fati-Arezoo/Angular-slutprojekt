// this is my api server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// our port
const port = 3000;

// this is like my database
let tasks = [];

// this is a function that return middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// defined a root
// this a method that have two paramters(path and callback)
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

// req come from client(all kind of information)
// res is our information to the client
app.post("/tasks", (req, res) => {
  // body is an object and it is propety of req
  const task = req.body;
  // we push data that we get from request
  tasks.push(task);

  res.send("Task is added to the database");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// app.get("/tasks/:id", (req, res) => {
//   res.send(req.params.id);
// });
//***********************/ delet a task /******************//
app.delete("/tasks/:id", (req, res) => {
  // Reading id from the URL
  const id = req.params.id;

  // Remove item from the tasks array
  task = tasks.filter((i) => {
    if (i.id !== id) {
      return true;
    }
    return false;
  });

  res.send("task  is deleted");
});

//***********************/ update a task /******************//
app.post("/task/:id", (req, res) => {
  // Reading id from the URL
  const id = req.params.id;
  const newTask = req.body;

  // Remove item from the tasks array
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.id === id) {
      tasks[i] = newTask;
    }
  }
  res.send("Task is edited");
});

// app.delete("/tasks/:id", (req, res) => {
//   // We want to delete the specified list (document with id in the URL)
//   Task.findOneAndRemove({
//     _id: req.params.id,
//   }).then((removedListDoc) => {
//     res.send(removedListDoc);

//     // delete all the tasks that are in the deleted list
//     deleteTasksFromTask(removedListDoc._id);
//   });
// });

// run
app.listen(port);

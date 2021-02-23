// this is my api server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// our port
const port = 3000;

// this is like my database
let tasks = [];
// for get new id every time
let taskCounter = 0;

// this is a function that return middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// defined a root
// this a method that have two paramters(path and callback)
app.get("/", (req, res) => {
  // can se the message in port 3000
  res.send("Hello World, from express");
});

//***********************/ post a task /******************//

// req come from client(all kind of information)
// res is our information to the client
app.post("/tasks", (req, res) => {
  // body is an object and it is propety of req
  const task = {
    id: ++taskCounter,
    title: req.body.title,
    content: req.body.content,
  };
  // we push data that we get from request
  tasks.push(task);

  res.send(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//***********************/ delet a task /******************//
app.delete("/tasks/:id/", (req, res) => {
  // convert id to number with parsenInt
  const id = parseInt(req.params.id, 10);

  // Remove item from the tasks array
  // We want to delete the specified list (document with id in the URL)
  tasks = tasks.filter((item) => {
    if (item.id !== id) {
      return true;
    }
    return false;
  });

  res.send({});
});

//***********************/ update a task /******************//
app.put("/tasks/:id", (req, res) => {
  // convert id to number with parsenInt
  const id = parseInt(req.params.id, 10);
  const newTask = req.body;

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.id === id) {
      tasks[i] = newTask;
    }
  }
  // send the newtask
  res.send(newTask);
});

// run
app.listen(port);

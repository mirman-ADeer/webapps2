'use strict';

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser")
const port = 3000;

const app = express();

app.use(bodyParser.json());

function loadTodos(callback) {
    return fs.readFile("./todos.json", (err, data) => {
        if (err) throw err;
        callback(JSON.parse(data));
    });
}

app.route("/todos")
    .get((req, res) => {
        loadTodos((json) => {
            res.json(json.data);
        });
    })
    .post((req, res) => {
        let newTodo = req.body;
        newTodo.completed = false;
        console.log(newTodo);
        loadTodos((json) => {
            json.data.push(newTodo);
            json.lastId++;
            newTodo.id = json.lastId;
            fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
                if (err) throw err;
                res.status(200).end();
            });
        });
    });

app.route("/todos/:id")
    .get((req, res) => {
        const id = parseInt(req.params.id);
        loadTodos((json) => {
            const todos = json.data;
            for (var todo of todos) {
                if (todo.id === id) {
                    return res.json(todo);
                }
            }
            return res.send("No todo found");
        });
    })
    .put((req, res) => {
        const id = req.params.id;
        const newData = req.body;
        loadTodos((json) => {
            const id = parseInt(req.params.id);
            let todos = json.data;
            for (const t in todos) {
                let todo = todos[t];
                if (todo.id === id) {
                    for (const property in newData) {
                        todo[property] = newData[property];
                    }
                    todos[t] = todo;
                }
            }
            json.data = todos;
            fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
                if (err) throw err;
                res.status(200).end();
            });
        });
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);
        loadTodos((json) => {
            json.data = json.data.filter((todo) => {
                return todo.id !== id;
            });
            fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
                if (err) throw err;
                res.status(200).end();
            });
        });
    });

app.listen(port, () => {
    console.log(`Listening on ${port}!`);
});

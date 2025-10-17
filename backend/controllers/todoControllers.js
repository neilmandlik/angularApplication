const fs = require('fs')
const path = require('path')

const todoFilePath = path.join(__dirname,'..','models','todo.json')

const fileData = fs.readFileSync(todoFilePath)
const todos = JSON.parse(fileData)

const getTodos = (req,res) => {
    res.json(todos)
}

module.exports = {getTodos}
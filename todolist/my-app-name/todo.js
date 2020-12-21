const express = require("express");
const todoList = express.Router();
const { v4: uuidv4 } = require('uuid');


const todoItems = [
    {
        name: "Laundry",
        description : "Seperate, Wash, Soak, Hang, Dry, Fold",
        imageUrl: "https://reviewed-com-res.cloudinary.com/image/fetch/s--BPmctlon--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,q_auto,w_1200,x_2507,y_1209/https://reviewed-production.s3.amazonaws.com/1556655796000/Separate-laundry-hero-2.jpg",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Walk Dogs",
        description : "Walk, Outside",
        imageUrl: "https://www.cesarsway.com/wp-content/uploads/2015/06/6-tips-for-mastering-the-dog-walk.jpg",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "zfood Shopping",
        description : "Celery, Chicken, Beef, Coffee",
        imageUrl: "https://fastly.4sqi.net/img/general/600x600/5973896_ybOGJ1LzFTewAn07IVwZqgyyTSlXlFFsyhtoa1dDQ4k.jpg",
        completed: true,
        _id: uuidv4()
    },
    
]


//Get All & Post
todoList.route("/")
    .get((req, res) => {
    res.send(todoItems)
    })
    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoItems.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database!`)
});

//Get-Only One
todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const foundTodo = todoItems.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//Delete
todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    todoItems.splice(todoIndex, 1)
    res.send(`Todo List item was deleted!`)
})

//Update - Put
todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoItems[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoList
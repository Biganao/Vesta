const express = require("express");
const Task = require("../models/taskModel");
const { 
    createTask, 
    getTasks, 
    getTask, 
    deleteTask, 
    updateTask 
} = require("../controllers/taskController");
const router = express.Router()

// Create a Task
router.post("/", createTask)

// Get/Read Tasks
router.get("/", getTasks)

// Get a Single Task
router.get("/:id", getTask)

//Delete a Task
router.delete("/:id", deleteTask)

//Update a Task
router.put("/:id", updateTask)

// Another way to compress this lines
// router.route("/").get(getTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

module.exports = router
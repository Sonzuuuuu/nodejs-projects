const Tasks = require('../models/Tasks.js')
const asyncWrapper = require('../middleware/async.js')
const { createCustomError } = require('../errors/custom-error.js')

// CRUD operations (Create, Read, Update, Delete) on tasks in a RESTful API
const getAllTasks = asyncWrapper (async (req, res) => {
    const task = await Tasks.find({})
    res.status(200).json({ task })
})

const createTask = asyncWrapper (async (req, res) => {
    const task = await Tasks.create(req.body)
    if (!task) {
        return next(createCustomError('Failed to create task', 404))     
    }
    res.status(201).json({ task })
})

const getTask = asyncWrapper (async (req, res, next) => {
    const { id:taskId } = req.params
    const task = await Tasks.findOne({ _id: taskId })
    if (!task) {
        return next(createCustomError(`No task with id: ${ taskId }`, 404))     
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper (async (req, res) => {
    const { id:taskId } = req.params 
    const task = await Tasks.findOneAndDelete({ _id: taskId })
})

const updateTask = asyncWrapper (async (req, res) => {
    
        const { id:taskId } = req.params       
        const task = await Tasks.findOneAndUpdate({ _id: taskId }, 
            req.body, {
                new: true,
                runValidators: true,
                useFindAndModify: false,
        })

        if (!task) {
            return next(createCustomError(`No task with id : ${ taskId }`, 404))
        }
        res.status(200).json({ task })
})


module.exports = {
    getAllTasks, 
    createTask, 
    updateTask, 
    deleteTask, 
    getTask,
}
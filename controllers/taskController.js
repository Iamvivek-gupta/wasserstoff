const { isValidObjectId, Mongoose } = require('mongoose');
const Task = require('../models/taskModels');
var mongo = require('mongodb');
var ObjectID = mongo.ObjectID;


exports.getAllTask = async (req, res) =>{
    try{
        let query = Task.find();
        const tasks = await query; 
       

        res.status(200).json({
        status: 'success',
        result: tasks.length,
        data: {
            tasks
        }
    });
    } catch(err){
        res.status(400).json({
        status: 'fail',
        message: err
    });
    }
}


exports.createTask = async (req, res) => {
    try{
        var body = req.body;
        console.log(body);
        var newTask = await Task.create(body);
        res.status(201).json({
            status: 'new task created',
            newUser: newTask
        })
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}



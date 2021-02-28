const mongoose = require('mongoose');
const validator = require('validator');
const taskSchema = new mongoose.Schema({
    task_name: String,
    progress: String
});





const Task = mongoose.model('Task', taskSchema);


module.exports = Task;
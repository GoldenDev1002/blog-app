
let mongoose = require("mongoose");
let newTaskSchema = mongoose.Schema;
let taskSchema2 = new newTaskSchema({
    name:{
        
     type: String,
     required: [true, "provide a name"],
     trim: true,
     maxlength: [20, "cannot be more than 20 characters"]
        
    },
    completed: {
        type: Boolean,
        default: false

    }
})

let taskModel2 = mongoose.model("nodeCollection",taskSchema2);
module.exports = taskModel2;
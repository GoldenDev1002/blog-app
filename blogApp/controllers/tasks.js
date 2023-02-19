//calling the task model 
let Tasks = require("../models/tasks.js");

//controllers for each tasks

const getAllTasks = async (req,res)=> {
    try{
    let allTasks = await Tasks.find();
    res.status(201).render({allTasks});
 
    }catch(err){
    res.status(500).send(err)
    }
    
}

const createTasks = async (req,res)=> {
    try{
    let taskControl =  new Tasks ({
    name :req.body.name,
     completed: req.body.completed}); //model.create is used ofr creating a request and sending it to the db
    res.status(201).json(taskControl); //converts the req.body in json format
    res.redirect()
    console.log(taskControl);
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask  = async (req,res)=> {
    try{
        const id = req.params.id;
        let taskUpdated = await Tasks.findOneAndUpdate(id, {
            name :req.body.name,
             completed: req.body.completed}, 
             {
            new: true,
            runValidators: true
        }); // a patch requets needs to have the id of the document and the content of the document
        
        if(!taskUpdated){
            return  res.status(404).json({msg: `There is no task with the ID ${taskUpdated}`});
          }
        
        res.status(201).json(taskUpdated)

    }catch(err){
   
        res.status(500).json(err); 
    }
    
}

const deleteTask= async  (req,res)=> {
    try{
    let id = req.params.id;
    let deletedTask = await Tasks.findOneAndDelete(id);
    res.status(201).json({deletedTask})

    }
    catch(err){
        res.status(500).json({err})
    }
    
}

const getTask = async (req, res)=> {
    try{
        let {id: TaskID} = req.params;
        let eachTask = new Tasks({_id: TaskID})

        //if the tasks doesn't exist
        if(!eachTask){
          return  res.status(404).json({msg: `There is no task with the ID ${eachTask}`});
        }
        //make sure there's a return stmt to give a distinct message cuz without the return the stmt
        //the code on line 49 will be executed first then the 43

        
        res.status(201).json({eachTask});
    }catch(error){
        res.status(500).json(error);
    }
    //res.json({id: req.params.id})
   
    //res.json({id: req.params.id})
}


module.exports = {
    getAllTasks,
    createTasks,
    updateTask,
    deleteTask, 
    getTask
}
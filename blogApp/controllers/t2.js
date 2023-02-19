let Tasks = require("../models/tasks.js");

let  getAllTasks = async (req, res)=> {
    try{
    let getTask = await Tasks.find();
    res.status(201).render("home", {allTasks: getTask})
    }catch(err){
     res.status(500).json(err)
    }

}


let createTasks = async (req, res)=> {

    try{
       let createTask = new Tasks({
        name: req.body.name,
        collected: req.body.collected
    }
       )
        createTask.save()
        .then((connect)=> {
            res.status(201).json({connect})
            //render("taskManager",{blog: connect})
        })
        }catch(err){
         res.status(500).json(err)
        }
    

}

let updateTask = async (req, res)=> {
  let {id: TaskID} = req.params
    try{
        
        let updatedTask = await Tasks.findOneAndUpdate({_id: TaskID},  req.body, {
            new: true,
            runValidators: true
        })
        res.status(201).json(updatedTask)

    }catch(err){
       res.status(500).json(err)
    }

}


let deletTask2 = async (req, res)=> {
  let id = req.params.id;
    try{
      let deletedTask = await Tasks.findByIdAndDelete(id);
        res.status(201).json(deletedTask)

    }catch(err){
       res.status(500).json(err)
    }


}

let deleteTask =  (req, res)=>{
    const id = req.params.id;

    //fing each document by its individual id and delete it
    Tasks.findByIdAndDelete(id)
    .then(result => {
        //WHEN WE SEWND A REQUEST BY THE FETCH API, IT CANNOT BE REDIRECTED IN NODE UNLESS D DATA IS CONVERTED TO JSON AND REDIRECTED BACK TO THE BROWSER
     //redirecting to the allblogs page after a blog has been deleted
     res.json({redirect:"/api/v1/tasks/allTask"})   
    })
    .catch((err)=> {
        console.log(err);
    })
}


let getTask = async (req, res)=> {
    let id = req.params.id;
    try{
      let eachTask = await Tasks.findById(id);
        res.status(201).render("details",  {detail: eachTask})

    }catch(err){
       res.status(500).json(err)
    }

}

let createTaskPage = (req, res)=> {
    res.status(201).render("create");
}


module.exports = {
    getAllTasks,
    createTasks,
    updateTask,
    deleteTask, 
    createTaskPage,
    getTask
}
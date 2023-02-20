//routers for all the tasks

let express = require("express");
let router = express.Router();

//object destructuring the tasks
const {getAllTasks,
    createTasks,
    updateTask,
    deleteTask, 
    getTask,
    createTaskPage} = require("../controllers/t2");


//route chaining
    router.route("/allTask").get(getAllTasks).post(createTasks);
    
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);



 

module.exports = router;

//postman
//click create a collection cuz we r setting multiple routes for an app
/*
app.get("/search/:key", async(req, res)=> {
  console.log(req.params.key);
  //res.send(data);

  let data = await db.find({

    //refers to multiple parameters
    "$or": [
      //yusing regex to check the name property
      {name: {$regex: req.params.key}},
      {location: {$regex : req.params.key}}
    ]
  });

  res.send(data);
})
*/


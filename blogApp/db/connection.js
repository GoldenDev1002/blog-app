let mongoose = require("mongoose");


mongoose.set("strictQuery", true);

let connectDB = (url)=> {
   return mongoose.connect(url, {
        useUnifiedTopology:true, 
        useNewUrlParser: true,
    })
    .then(()=> {
        console.log("conneect to the db......")
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = connectDB;


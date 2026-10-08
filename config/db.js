const mongoose=require('mongoose');
const mongodb=async()=>
{
    try{
               await mongoose.connect("mongodb://127.0.0.1:27017/student");
               console.log("Database connected successfully");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports=mongodb;
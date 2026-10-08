const mongoose=require('mongoose')

const studentschema=new mongoose.Schema({
     name:{
          type:String,
          require:true
     },
     age:{
        type:Number,
        require:true
     },
     branch:{
         type:String,
         require:true
     }
})
module.exports=mongoose.model("Student",studentschema)
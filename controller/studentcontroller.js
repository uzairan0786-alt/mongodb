const student_model=require('../model/stu')

const student=async (req,res)=>
{
        res.render("Home")
}

const Addstudent=async (req,res)=>
{
     if(req.method=='GET')
     {
         res.render('Addstudents')
     }
     else 
     {
            const mydata={
            name:req.body.name,
            age:req.body.age,
            branch:req.body.branch
         }
       
        await student_model.create(mydata)
         res.render('Addstudents',{message:mydata.name+'Record Save Successfully'})

     }
}
module.exports={
    student,
    Addstudent
};
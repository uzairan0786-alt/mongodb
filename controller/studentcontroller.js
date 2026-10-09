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

const detail_list=async(req,res)=>
{
      record=await student_model.find()
      res.render('view_student',{students:record})
}
const delete_stu=async(req,res)=>
{
    console.log(req.params.id)
    await student_model.findByIdAndDelete(req.params.id)
    res.redirect('/viewstudent')
}
const update_students=async(req,res)=>
{
    const _id=req.body.stuid 
    const name=req.body.name
    const age=req.body.age
    const branch=req.body.branch
    await student_model.findByIdAndUpdate(_id,{name:name,age:age,branch:branch})
    res.redirect('/viewstudent')
}


module.exports={
    student,
    Addstudent,
    detail_list,
    delete_stu,
    update_students
};
const express=require('express')
const router=express.Router();
const studentController=require('./controller/studentcontroller')

router.get('/', studentController.student)
router.use('/addstudent',studentController.Addstudent)

module.exports=router;
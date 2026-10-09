const express=require('express')
const router=express.Router();
const studentController=require('./controller/studentcontroller')

router.get('/', studentController.student)
router.use('/addstudent',studentController.Addstudent)
router.use('/viewstudent',studentController.detail_list)
router.use('/delete_stu/:id',studentController.delete_stu)
router.use('/update_student',studentController.update_students)
module.exports=router;
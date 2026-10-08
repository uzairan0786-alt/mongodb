const express=require('express')
const app=express();
const mongodb=require('./config/db')
const myroute=require('./route')
const PORT=3000;

mongodb();
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use("/",myroute)

app.listen(PORT,()=>{
    console.log(`click Here http://localhost:${PORT}`)
})

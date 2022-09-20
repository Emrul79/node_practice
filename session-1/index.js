const app = require('express')
const myapp = app();
const port = 3000;

myapp.get('/',(req,res)=>{
    res.send('<h1>your app is running successfully</h1>')
})

myapp.listen(port,()=>{
    console.log('your app is running at localhost 3000')
})
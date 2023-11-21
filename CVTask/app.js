
const express = require('express')
const app = express()
const connecttionDB=require('./model/connecttionDB')
app.use(express.json());
const {
    userRouter,
    companyRouter
}=require('./router/app')

app.use(userRouter,companyRouter)


connecttionDB()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log(`is run at port 3000`);
})
const router = require('express').Router();



const companyController =require('./controller/addcompany');
router.post("/addCompany",companyController)


   
module.exports=router
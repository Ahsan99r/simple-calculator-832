#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer =await inquirer.prompt([
    {message:"Enter first number",type:"number",name:"firstnumber"},
    {message:"Enter second number",type:"number",name:"secondnumber"},
    {message:"select one of the operators to perform operation",type:"list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division"],},
]);
//condition statment
if(asnwer.operator ==="Addition"){
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}else if(asnwer.operator ==="Subtraction"){
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}else if(asnwer.operator ==="Multiplication"){
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}else if(asnwer.operator ==="Division"){
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}else {
    console.log("Please select valid operator")
}
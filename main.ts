#! /usr/bin/env node
import inquirer from "inquirer"

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
    this.students.push(obj)
        }
  }   
let persons=new Person()
    let programStart=async(persons:Person)=>{
    do {
       console.log("welcome")
    let ans =await inquirer.prompt({
    name:"select",
    type:"list",
    message:"whom would you like to interact with?",
    choices:["staff","student","exit"]
})
if (ans.select=="staff"){
    console.log("you approach the staff room.Please feelfree to ask")
}
else if (ans.select =="student"){
 let ans = await inquirer.prompt   ({
    name:"student",
    type:"input",
    message:"Enter the student name"
 })
 let student=persons.students.find(val=>val.name==ans.student)

if(!student){
let name=new Student(ans.student)
persons.addStudent(name)
console.log(`Hello i am ${name.name}.Nice to meet you.`)
console.log("New student added")
console.log("Current student list")
console.log(persons.students)
} else{
    console.log(`Hello i am ${Student.name}.Nice to see you`)
console.log("Existing student list")
console.log(persons.students)
}
} else if (ans.select == "exit"){
    console.log("Exiting the program...")
    process.exit()
}
}while(true);

 }
 programStart(persons)
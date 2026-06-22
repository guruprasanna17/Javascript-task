console.log("Employee Details");
console.log("----------------");



let Employeename = "Guruprasanna"
let Employeeid = "EMP117"
const Department = "Development"
const Salary = "30000"
const isPermanent = "true"
console.log(`Name : ${Employeename}`);
console.log(`ID : ${Employeeid}`);
console.log(`Department : ${Department}`);
console.log(`Salary : ${Salary}`);
console.log(`Permanent : ${isPermanent}`);


let skills = ["HTML","CSS","JavaScript","React","Git","Node.js"]
console.log(skills[0]);
console.log(skills[2]);
console.log(skills[5]);
console.log(skills.length);

const company ={
    companyname :"Stackly",
    location : "Coimbatore",
    employees : 150,
    technologies :["HTML","CSS","JavaScript","React"]
};
console.log(company.companyname);
console.log(company.location);
console.log(company.employees);
console.log(company.technologies.length);

let basicsalary = 30000;
let bonus = 5000;
let totalsalary = basicsalary+bonus ;
let tax = totalsalary*0.10;
let finalsalary = totalsalary-tax;
console.log("basicsalary : " +basicsalary);
console.log("bonus : " + bonus);
console.log("totalsalary : "+ totalsalary);
console.log("tax : "+ tax);
console.log("finalsalary : " + finalsalary);

let attendance = 92;
if (attendance>=75){
    console.log("Eligible for Exam");
}
    else{
    console.log("Not Eligible");
}


let username = "admin";
let password = "12345";
if(username==="admin" && password==="12345"){
    console.log("Login Successful");   
}
else{
    console.log("Invalid Credentials");
    
}


let productname = "Lenovo"
let productprice = "45000"
let quantity = 2;
let totalbill = productprice*quantity;

console.log("Product : "+productname);
console.log("Price : "+ productprice);
console.log("Quantity : "+ quantity);
console.log("Total : "+ totalbill);


let visitors = 100;

console.log("Pre Increment : "+ ++visitors);
console.log("Post Increment : "+ visitors++);

console.log("Pre Decrement : " +  --visitors);
console.log("Post Decrement : " + visitors--);


console.log(10 =="10");
console.log(10 ==="10");
console.log(20 !="20");
console.log(20 !=="20");
console.log(5<10);
console.log(15>=20);
console.log(100<=100);

let EmployeeName= prompt("Enter Employee name");
let EmployeeAge = prompt(" Enter Employee Age");
confirm("Do you want to join our company?");
alert(`Welcome ${EmployeeName}`);
alert("Thank you");







































//  Task 1
let employeename = prompt("Enter Employee Name: ");
let employeeage = Number(prompt("Enter Employee Age:"));
let employeedepartment = prompt("Enter Employee Department:");
let employeesalary = Number(prompt ("Enter Employee Salary"));

let employee={
    name: employeename,
    age : employeeage,
    department : employeedepartment,
    salary : employeesalary
}
console.log("Employee Details : ");
console.log("Name :",employeename);
console.log("Age :",employeeage);
console.log("Department :",employeedepartment);
console.log("Salary :",employeesalary);

if(employee.salary>30000){
    console.log("Eligible for Bonus");
}else{
    console.log("Not Eligible");
    
}
//task 2
let productname = prompt("Enter Product Name:");
let productprice = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));
let totalbill = Number(prompt(productprice*quantity));
let finalAmount;

console.log("Product Name : ",productname);
console.log("Product Price : ",productprice);
console.log("Quantity : ",quantity);
console.log("Total Bill : ",totalbill);
console.log("Final Amount : ",finalAmount);


if(totalbill>5000){
    let discount = totalbill*0.01
    finalAmount = totalbill-discount;
    console.log("10% discount applied");
}else{
    finalAmount=totalbill;
    console.log("No Discount applied");
    
}




//task 3
let Studentname = prompt("Enter Student Name:");
let Marks = prompt("Student Marks:");

if(Marks>=90){
    alert(Studentname+":Grade A");
    
}else if(Marks>=75){
    alert(Studentname+":Grade B");
    
}else if(Marks>=50){
    alert(Studentname+":Grade C"); 
}else{
    alert(Studentname+":Fail")

}


// Task 4
let Username1 = prompt("Enter User Name1:");
let accountbalance = prompt("Enter Account Balance:");
let withdrawalamount= prompt("Enter Withdrawal Amount:");
if(withdrawalamount<=accountbalance){
    console.log("Transaction Successful");
    
}else{
    console.log("Insufficient Balance");
    
}




//task 5
let username = "admin";
let password = "12345";

let inputUsername = prompt("Enter Username:")
let inputPassword = prompt("Enter Password:")
if(inputUsername===username && inputPassword===password){
    console.log("Login Successful");   
}
else{
    console.log("Invalid Username or Password");
    
}




//task 6
let foods = ["idli","dosa","pongal","biryani","chapati","pizza","burger","noddles"]

for(let a of foods){
    console.log("First Item:",foods[0]);    
}
for (let a of foods){
    console.log("Last Item:",foods[7]);
}
for(let a of foods){
    console.log("Total Number of Items:",foods.length);
    
}
for (let a of foods){
    console.log(a);
    
}

//task 7
let obj = {
    name :"hari",
    age :"22",
    department:"EEE",
    salary:"30000",
    experience:"2 years"
}
for (let b in obj){
    console.log(b,obj[b]);
    
}
// task 8
let trafficsignal= prompt("Enter signal color(Red,Yellow,Green):");
switch(trafficsignal){
    case "Red":console.log("Stop");break;
    case "Yellow":console.log("Ready");break;
    case "Green":console.log("Go");break;

    default:console.log("Invalid Signal");

}
//task 9
let age = prompt("Enter age:")

if(age>=0 && age<=12){
    alert(age+":Child");
}else if(age>=13 && age<=19){
    alert(age+":Teenager");
}else if(age>=20 && age<=59){
    alert(age+":Adult");
}else if(age>=60){
    alert(age+":Senior Citizen");
}

//Task 10
let employeename1 =prompt("Enter  Employee Name1:");
let attendance = prompt("Enter Attendance(Present/Absent):");
console.log("Welcome "+ employeename1);
console.log("Attendance : "+(attendance==="Present"?"Present" : "Absent"));



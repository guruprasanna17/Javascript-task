const employee = {
    employeeName: "Guruprasanna",
    employeeid: "EMP837",
    department: "Development",
    experience: "Fresher",
    salary: 30000
};
console.log("==============================");
console.log("     EMPLOYEE PORTAL          ");
console.log("==============================");

console.log(`Employee Name : ${employee.employeeName}`);
console.log(`Employee ID : ${employee.employeeid}`);
console.log(`Department : ${employee.department} `);
console.log(`Experience : ${employee.experience}`);
console.log(`Salary : ${employee.salary}`);

//Salary Calculation
let bonus = employee.salary* 0.1;
let finalsalary = employee.salary + bonus;
console.log(`Bonus : ${bonus}`);
console.log(`Final Salary : ${finalsalary}`);


let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"]
console.log("Skills : " + skills);

let attendane = 92;
let examstatus = attendane >= 75 ? "Eligible" : "Not Eligible";
console.log(`Attendance : ${attendane}%`);
console.log(`Exam Status : ${examstatus}`);

let username = "admin";
let password = "12345";
let loginStatus = username === "admin" && password === "12345" ? "Success" : "Failed";
console.log(`Login Status : ${loginStatus}`);

const company = {
    companyname: "Stackly",
    location: "Coimbatore"
};
console.log(`Company : ${company.companyname}`);
console.log(`Location : ${company.location}`);

let employeename = prompt("Enter Name:");

let joinCompany = confirm("Do you want to view Employee Details?");

alert("Welcome");

console.warn("Project Successful");

console.error("Error");

console.log("==============================");

















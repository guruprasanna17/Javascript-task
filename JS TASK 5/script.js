// Task 1
function yearlysalary(monthlysalary) {
    return monthlysalary * 12;
}
let salary = yearlysalary(45000)
console.log("Yearly Salary : ", salary);

// Task 2
let marks = 72
function checkresult(marks) {
    if (marks >= 35) {
        return "pass"
    } else {
        return "fail"
    }
}
console.log("Result : ", checkresult(marks));

// Task 3
function calculatebill(product, quantity) {
    return product * quantity
}
let burger = 180
let quantity = 3

let totalbill = calculatebill(burger, quantity)
console.log("Total Bill : ", totalbill);

// Task 4
function Employeedetails(name, department) {
    console.log("Welcome  " + name);
    console.log("Department : " + department);

}
Employeedetails("Vishnu", "Development");

// Task 5
function finalamount(price, discount) {
    return price - discount;
}
let price = 5000;
let discount = 500;
console.log("Final Amount : " + finalamount(price, discount));

// Task 6
function function1() {
    console.log("Loading Dashborad...");

}
function function2() {
    console.log("Login Successful");

}
function1(function2());

// Task 7
function foodorder(callback) {
    console.log("Order Received");
    callback();

}
function preparedfood() {
    console.log("Preparing Food");
    console.log("Out for Delivery");
    console.log("Delivered");

}
foodorder(preparedfood);

// Task 8
function* gen() {
    yield "10% coupons"
    yield "20% coupons"
    yield "50% coupons"
    yield "Better Luck Next Time"
}
let genval = gen()
console.log(genval.next());
console.log(genval.next());
console.log(genval.next());
console.log(genval.next());
if (genval.next().done) {
    console.log("value fully done");

}

//Task 9
function employeesalary(monthly){
    return monthly
}
let s1salary = 50000
let s1bonus = 5000
totalsalary = s1salary+s1bonus
console.log("Total Salary :",totalsalary);

// Task 10
let employeePersonal={
    name : "hari",
    age : 23,
    city: "Erode"
}
let employeeOffice={
    id:"101",
    department:"Development",
    salary:"30000"
}
let totaldetails = {...employeePersonal,...employeeOffice}
console.log(totaldetails);

// Task 11
let card1 = ["milk","bread","eggs"]
let card2 = ["rice","sugar","oil"]

let totalcard = [...card1,...card2]
console.log(totalcard);

// Task 12
function student(name,...marks) {
    let total = 0;
    for(let mark of marks){
        total+=mark;
    }
    let averagemark = total /marks.length;
    console.log("Student : ",name);
    console.log("Total Marks : ",total);
    console.log("Average ",averagemark);
    
}
student("Naveen",90,85,88,95);

// Task 13
let obj1={
    name1: "Laptop",
    price1: 65000,
    brand1:"Dell",
    stock1:20
}
let {name1,price1}=obj1
console.log(name1,price1);

// Task 14

const employee = [101,"Naveen","Chennai",9876543210]

const[id,name,city,number]=employee;


console.log("ID : ",id);
console.log("Name : ",name)
console.log("City : ",city);

// Task 15
let cart=["Mobile","Laptop"]
cart.push("Headphone");
console.log(cart);

// Task 16
let cart1= ["Mobile","Laptop","Headphone"]
cart1.pop();
console.log(cart1);

// Task 17
let names =["Rahul","Arun","John","David"]
names.splice(2,1,"Naveen");
console.log(names);

// Task 18
let products=["Mouse","Keyboard","Monitor","Laptop"]
console.log(products.includes("Laptop"));

// Task 19
let salaries = [25000,45000,30000,70000]
salaries.sort((a,b)=>a-b);
console.log(salaries);

// Task 20
let messages = ["Hi","Hello","How are you?","Good Morning"]
messages.reverse();
console.log(messages);

// Bonus Task 
console.log("--------------Bonus Task---------------");
// Employee Management System

let employees = [];

// 1. Add Employee
function addEmployee(id, name, salary) {
    employees.push({
        id: id,
        name: name,
        salary: salary
    });
    console.log(name + " added successfully.");
}

// Add Sample Employees
addEmployee(101, "Rahul", 30000);
addEmployee(102, "Arun", 45000);
addEmployee(103, "John", 40000);

// 2. View Employees
function viewEmployees() {
    console.log("\nEmployee List");
    console.log(employees);
}

viewEmployees();

// 3. Search Employee by ID
function searchById(id) {
    let emp = employees.find(employee => employee.id === id);

    if (emp) {
        console.log("\nEmployee Found");
        console.log(emp);
    } else {
        console.log("Employee Not Found");
    }
}

searchById(102);

// 4. Calculate Salary + Bonus
function calculateBonus(id) {
    let emp = employees.find(employee => employee.id === id);

    if (emp) {
        let bonus = emp.salary * 0.10;
        let total = emp.salary + bonus;

        console.log("\nSalary :", emp.salary);
        console.log("Bonus :", bonus);
        console.log("Total Salary :", total);
    }
}

calculateBonus(101);

// 5. Remove Employee
function removeEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);

    console.log("\nEmployee Removed");
}

removeEmployee(103);

viewEmployees();

// 6. Sort Employees by Salary
function sortSalary() {
    employees.sort((a, b) => a.salary - b.salary);

    console.log("\nSorted by Salary");
    console.log(employees);
}

sortSalary();

// 7. Find Employee by Name
function findByName(name) {
    let emp = employees.find(employee => employee.name === name);

    if (emp) {
        console.log("\nEmployee Found");
        console.log(emp);
    } else {
        console.log("Employee Not Found");
    }
}

findByName("Rahul");

// 8. Display Employee Details using Destructuring
function displayDetails(id) {
    let emp = employees.find(employee => employee.id === id);

    if (emp) {
        let { id, name, salary } = emp;

        console.log("\nEmployee Details");
        console.log("ID :", id);
        console.log("Name :", name);
        console.log("Salary :", salary);
    }
}

displayDetails(101);


console.log("----------------End--------------------");










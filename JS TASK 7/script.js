// TASK 1
let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
]
//1
console.log("All Students");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
//2
console.log("Only student Names");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);

}
//3
console.log("find student iD 102");

let serachid = 102
let found = false
for (let i = 0; i < students.length; i++) {
    if (students[i].id === serachid) {
        console.log("student found");
        console.log("name: ", students[i].name);
        console.log(("ID : ", students[i].id));
        console.log("mark: ", students[i].mark);
        found = true

    }
    if (!found) {
        console.log("Student  not found");

    }
}
// 4
console.log("passed students");

for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
        console.log("Student name : ", students[i].name);

    }
}
// 5
console.log("Count Total students");
console.log("Total Students : ", students.length);

// TASK 2
let employees = [
    {
        name: "Naveen",
        salary: 30000
    },
    {
        name: "John",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 60000
    }
];

let highest = employees[0];
let lowest = employees[0];
let totalSalary = 0;

// Find highest, lowest and total salary
for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }

    totalSalary += employees[i].salary;
}

console.log("Highest Salary:", highest.salary);
console.log("Employee:", highest.name);

console.log("Lowest Salary:", lowest.salary);
console.log("Employee:", lowest.name);

console.log("Salary after ₹5000 Bonus:");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " : " + (employees[i].salary + 5000));
}

console.log("Total Salary:", totalSalary);

console.log("Employees earning above ₹40,000:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name + " : " + employees[i].salary);
    }
}

// TASK 3
let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
]
// 1
console.log("Product Names");

for (let i = 0; i < products.length; i++)
    console.log(products[i].name);
// 2
console.log("Total Bill");
let totalbill = 0
for (let i = 0; i < products.length; i++) {
    totalbill += products[i].price
}
console.log("Total Bill : ", totalbill);
//3
let searchproduct = "Mouse";
for (let i = 0; i < products.length; i++) {
    if (products[i].name === searchproduct) {
        console.log("Product Found");
        console.log("Name : ", products[i].name);
        console.log("Price : ", products[i].price);
    }

}

// 4
console.log("Apply 10% Discount");
for (let i = 0; i < products.length; i++) {
    let Discountprice = products[i].price - (products[i].price * 10 / 100);
    console.log("Discount price : ", Discountprice);

}
//5
console.log("final Bill");

let totalbill1 = 52000;
let Discount = 5200;
let finalBill = totalbill - Discount;
console.log("Finalbill : ", finalBill);

// TASK 4
let account = {
    name: "Naveen",
    balance: 50000
}
//1
account.balance = account.balance + 10000;
console.log("Deposit : ", account.balance);
//2
account.balance = account.balance - 5000
console.log("Withdrawal : ", account.balance);
//3
console.log("Current Balance : ", account.balance);
//4
if (account.balance <= 20000) {
    console.log("Balance is below ₹20000");
} else {
    console.log("Balance is above ₹20000");

}
// 5
console.log("Account Details");
console.log("Account Name : ", account.name);
console.log("Account Balane : ", account.balance);

// Task 5
let username = prompt("Enter Username:");
let password = prompt("Enter Password:");
if (username === "admin" && password === "1234") {
    console.log("Welcome");
} else {
    console.log("Invalid Username or Password");

}

// TASk 6
let trafficlight = prompt("Enter Traffic signal color (red,yellow,red): ");
switch (trafficlight) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;

    default: console.log("Have a nice day");

}

// TASk 7
let balance1 = 5000
let ATM = prompt("Enter ATM Machine (Balance,Deposit,Withdraw,Exit): ");
switch (ATM) {
    case 1: console.log("Balance : ₹", balance1); break;
    case 2: let deposit = Number(prompt("Enter Deposit Amount : "))
        deposit = balance1 + deposit;
        console.log("Deposit : ", deposit); break;
    case 3: let withdraw1 = Number(prompt("Enter Withdraw Amount : "))
        balance1 = balance1 - withdraw1
        console.log(prompt("Withdraw : ₹", balance1)); break;
    case 4: console.log("Exit"); break;

    default: console.log("Invalid Choice");

}

// TASK 8
let score = [10, 25, 40, 60, 80, 100]
//1
let highest1 = score[0];
for (let i = 0; i < score.length; i++) {
    if (score[i] > highest1) {
        highest1 = score[i];

    }

}
console.log("Highest Score : ", highest1);
//2
let lowest1 = score[0];
for (let i = 0; i > score.length; i++) {
    if (score[i] > lowest1) {
        lowest1 = score[i];

    }

}
console.log("Lowest Score : ", lowest1);
//3
let total = 0
for (let i = 0; i < score.length; i++) {
    total = total + score[i];

}
console.log("Total Score : ", total);
//4
let average = total / score.length
console.log("Average Score : ", average);


//TASK 9
let age = Number(prompt("What is your Age: "));
let ticket = confirm("Do you want to watch the movie?")
if (age >= 18 && ticket) {
    console.log("Movie Allowed");

}
else {
    console.log("Not Allowed");

}

// TASK 10
let token = prompt("Enter token (1,2,3): ");
switch (token) {
    case "1": console.log("Doctor A"); break;
    case "2": console.log("Doctor B"); break;
    case "3": console.log("Doctor C"); break;

    default: console.log("Doctor leave");

}

// TASK 11
let fruits = ["Apple", "Orange", "Banana"]
//push
fruits.push("Grapes");
console.log(fruits);
//pop
fruits.pop();
console.log(fruits);
//shift
fruits.shift()
console.log(fruits);
// unshift
fruits.unshift("Mango")
console.log(fruits);
//splice
fruits.splice(2, 1, "Lemon")
console.log(fruits);
//slice
fruits.slice(1, 2)
console.log(fruits);

//TASK 12
let employees1 = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
]

//map
let updatedsalary = employees1.map(emp => ({
    name: emp.name,
    salary: emp.salary + 5000
}));
console.log("updated salaries : ", updatedsalary);
//filter
let highersalary = employees1.filter(emp => emp.salary > 30000);
console.log("Salary greater than ₹30,000 : ", highersalary);
//find
let findsalary = employees1.find((c, i, t) => {
    return c.salary === 50000
})
console.log("Find salary ₹50,000 : ", findsalary);
//reduce
let totalsalary = employees1.reduce((total, emp) => total + emp.salary, 0);

console.log("Total Salary : ", totalsalary);
// some
let highsalary1 = employees1.some(emp => emp.salary > 60000)
console.log("Any employee earns more than ₹60,000?: ", highsalary1);
//every
let highsalary2 = employees1.every(emp => emp.salary > 15000)
console.log("Every employee earns more than ₹15,000? : ", highsalary2);


//TASK 13
let company = "Stackly IT"
//1 uppercase
console.log(company.toUpperCase());
//2 lowercase
console.log(company.toLowerCase());
//3 trim
console.log(company.trim());
//4 replace
console.log(company.replace("IT", "Software"));
//5 includes
console.log(company.includes("Stackly"));
//6 split
console.log(company.trim().split(""));

//TASK 14
// Display the current time every second
let timer = setInterval(() => {
    let now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);

// Stop after 10 seconds
setTimeout(() => {
    clearInterval(timer);
    console.log("Timer stopped!");
}, 10000);

// TASK 15
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    // 1. Print all product titles
    console.log("All Product Titles");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].title);
    }

    // 2. Print only prices
    console.log("Only Prices");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].price);
    }

    // 3. Print products costing more than ₹100
    console.log("Products Costing More Than ₹100");
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 100) {
            console.log(products[i].title, "-", products[i].price);
        }
    }

    // 4. Count total products
    console.log("Total Products");
    console.log(products.length);

    // 5. Print category names
    console.log("Category Names");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].category);
    }

})
.catch((error) => {
    console.log(error);
});

console.log("----------------Bonus Task----------------");
// Employee Payroll System

let employees3 = [
  {
    id: 104,
    name: "Vimal",
    salary: 30000
  },
  {
    id: 105,
    name: "Kamal",
    salary: 45000
  },
  {
    id: 106,
    name: "Vikram",
    salary: 60000
  }
];

// 1. View Employees
function viewEmployees() {
  console.log("Employee List");
  console.table(employees);
}

// 2. Search Employee by ID
function searchEmployee(id) {
  let emp = employees.find(e => e.id == id);

  if (emp) {
    console.log(emp);
  } else {
    console.log("Employee Not Found");
  }
}

// 3. Add Bonus
function addBonus() {
  employees.map(emp => {
    emp.salary += 5000;
  });

  console.log("Bonus Added");
  console.table(employees);
}

// 4. Highest Salary
function highestSalary() {
  let max = employees.reduce((a, b) =>
    a.salary > b.salary ? a : b
  );

  console.log("Highest Salary");
  console.log(max);
}

// 5. Lowest Salary
function lowestSalary() {
  let min = employees.reduce((a, b) =>
    a.salary < b.salary ? a : b
  );

  console.log("Lowest Salary");
  console.log(min);
}

// 6. Total Salary
function totalSalary1() {
  let total = employees.reduce((sum, emp) =>
    sum + emp.salary, 0
  );

  console.log("Total Salary =", total);
}

// 7. Salary Above 40000
function salaryAbove40000() {
  let result = employees.filter(emp =>
    emp.salary > 40000
  );

  console.table(result);
}

// 8. Employee Report
function employeeReport() {

  employees.forEach(emp => {
    console.log(`
ID : ${emp.id}
Name : ${emp.name}
Salary : ₹${emp.salary}
---------------------
`);
  });

}

// 9. Current Date & Time
function currentDateTime() {
  let today = new Date();

  console.log(today.toLocaleString());
}

// 10. Fetch Employee Data from API
function fetchEmployees() {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {

      console.log("Employee API Data");

      data.forEach(emp => {
        console.log(emp.id, emp.name);
      });

    });

}

// Callback Function
function greeting(callback) {
  console.log("Welcome");
  callback();
}

// Menu using switch
let choice = Number(prompt(`
1.View Employees
2.Search Employee
3.Add Bonus
4.Highest Salary
5.Lowest Salary
6.Total Salary
7.Salary Above 40000
8.Employee Report
9.Current Date & Time
10.Fetch API
11.Exit
`));

switch (choice) {

  case 1:
    viewEmployees();
    break;

  case 2:
    let id = prompt("Enter Employee ID");
    searchEmployee(id);
    break;

  case 3:
    addBonus();
    break;

  case 4:
    highestSalary();
    break;

  case 5:
    lowestSalary();
    break;

  case 6:
    totalSalary();
    break;

  case 7:
    salaryAbove40000();
    break;

  case 8:
    employeeReport();
    break;

  case 9:
    currentDateTime();
    break;

  case 10:
    greeting(fetchEmployees);
    break;

  case 11:
    console.log("Thank You");
    break;

  default:
    console.log("Invalid Choice");

}

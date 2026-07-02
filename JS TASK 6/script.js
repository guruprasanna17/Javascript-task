// TASK 1
let employees = [
  {
    name: "Naveen",
    id: 101,
    salary: 30000
  },
  {
    name: "John",
    id: 102,
    salary: 60000
  },
  {
    name: "Arun",
    id: 103,
    salary: 45000
  }
];


let highestEmployee = employees.reduce((max, emp) => {
  return emp.salary > max.salary ? emp : max;
});

console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);

// TASK 2
let searchId = 103;

let employee = employees.find(emp => emp.id === searchId);

if (employee) {
    console.log("Employee Found");
    console.log("Name :", employee.name);
    console.log("Salary :", employee.salary);
} else {
    console.log("Employee Not Found");
}

//TASK 3
let bonus = 5000;

employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + bonus);
});


//TASK 4
let employeesExperience = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

employeesExperience.forEach(emp => {
    if (emp.experience >= 5) {
        console.log(emp.name + " - Senior Employee");
    } else {
        console.log(emp.name + " - Junior Employee");
    }
}); 

//TASK 5
employees.forEach(emp => {
    console.log(emp.name);
});

//TASK 6
employees.forEach(emp => {
    console.log(emp.id);
});

//TASK 7
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

console.log("Total Salary :", totalSalary);

//TASK 8
employees
.filter(emp => emp.salary > 40000)
.forEach(emp => {
    console.log(emp.name);
});

//TASK 9
employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + 5000);
});

//TASK 10
employees.forEach(emp => {
    console.log(`
Employee Name : ${emp.name}
Employee ID : ${emp.id}
Salary : ${emp.salary}
`);
});


console.log("----------BONUS TASK------------");

// BONUS TASK
// Total Employees
console.log("Total Employees :", employees.length);
// Highest Salary
let highest = employees.reduce((a, b) =>
    a.salary > b.salary ? a : b
);

console.log("Highest Salary :", highest.salary);
// Lowest Salary
let lowest = employees.reduce((a, b) =>
    a.salary < b.salary ? a : b
);

console.log("Lowest Salary :", lowest.salary);
// Total Salary
let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log("Total Salary :", total);
// Employee with Highest Salary
console.log("Employee :", highest.name);
// Employee with Lowest Salary
console.log("Employee :", lowest.name);
// Salary Greater Than ₹40,000
employees
.filter(emp => emp.salary > 40000)
.forEach(emp => console.log(emp.name));
// Search Employee by ID
let id = 103;

let result = employees.find(emp => emp.id === id);

if (result) {
    console.log(result);
} else {
    console.log("Employee Not Found");
}
// Add ₹5,000 Bonus
employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + 5000);
});
// Professional Report
employees.forEach(emp => {
    console.log(`
-------------------------
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}
-------------------------
`);
});

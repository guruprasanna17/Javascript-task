// Task 1
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
    }
];
for (let emp of employees) {


    if (emp.salary > 20000) {
        console.log("Employee Eligible For Bonus");

    } else {
        console.log("Employee Not Eligible For Bonus");

    }
}

// Task 2
let mark1 = prompt("Enter your mark1:");
let mark2 = prompt("Enter your mark2:");
let mark3 = prompt("Enter your mark3:");

let total = mark1 + mark2 + mark3
let percentage = total / 3
console.log("Total : ", total);
console.log("Percentage : ", percentage);

if (percentage >= 90) {
    console.log("Grade : A+");
} else if (percentage >= 80) {
    console.log("Grade : A");
} else if (percentage >= 70) {
    console.log("Grade : B");
} else if (percentage >= 60) {
    console.log("Grade : C");
} else {
    console.log("Grade : Fail");

}



// Task 3
let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2000
    }
];
function calculateBill(items) {
    let total = 0;
    for (let products of items) {
        total += products.price;
    }
    let discount = 0;
    if (total > 5000) {
        discount = total * 0.10;
    }
    let finalamount = total - discount;

    console.log("Total : " + total);
    console.log("Discount : " + discount);
    console.log("Finalamount :" + finalamount);

}
calculateBill(products);

// Task 4
let username = "admin";
let password = "12345";
if (username === username && password === password) {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");

}
// Task 5
let trafficlight = prompt("Enter color:");

switch (trafficlight) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Start"); break;
    case "green": console.log("Go"); break;


    default: console.log("have a nice day");


}


// Task 6
let balance = prompt("Enter your Balance:");
let withdrawalamount = prompt("Enter your withdrawalamount:");
let checkbalance = prompt("Enter your Check Balance Availability:");
if (checkbalance > 2000) {
    alert("Success")
} else {
    alert("Failure")
}


// Task 7
function orderPlaced(callback) {
    console.log("Order Received");
    callback();
}

function foodPrepared(callback) {
    console.log("Food Preparing");
    callback();
}

function foodDelivered(callback) {
    console.log("Food Delivered");
}

orderPlaced(function () {
    foodPrepared(function () {
        foodDelivered(function () {

        });
    });
});

// Task 8
function* cashbackgenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Better Luck Next Time ";
}

let offers = cashbackgenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


// Task 9
let age = prompt("Enter your age")
let weight = prompt("Enter your weight?kg")
if (age >= 18) {
    if (weight >= 50) {
        alert("Eligible For Treatment")
    } else {
        alert("Not ELigible")
    }
}


console.log("============Final Task============");
employees = [];

// Add Employee
function addEmployee(id, name, salary) {
    employees.push({
        id: id,
        name: name,
        salary: salary
    });
    console.log("Employee Added");
}

// View Employees
function viewEmployees() {
    for (let emp of employees) {
        console.log(emp.id, emp.name, emp.salary);
    }
}

// Calculate Bonus
function calculateBonus(id) {
    for (let emp of employees) {
        if (emp.id === id) {
            let bonus = emp.salary * 0.10;
            console.log("Bonus:", bonus);
        }
    }
}

// Search Employee By ID
function searchEmployee(id) {
    for (let emp of employees) {
        if (emp.id === id) {
            console.log("Employee Found:", emp);
            return;
        }
    }
    console.log("Employee Not Found");
}

// Delete Employee
function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    console.log("Employee Deleted");
}

// Total Employees Count
function totalEmployees() {
    console.log("Total Employees:", employees.length);
}

// Callback Function
function processEmployee(callback) {
    callback();
}

// CRUD Operations
addEmployee(101, "Hari", 30000);
addEmployee(102, "Vicky", 50000);

processEmployee(viewEmployees);

calculateBonus(102);
searchEmployee(101);
deleteEmployee(101);
totalEmployees();
console.log("=====================================");

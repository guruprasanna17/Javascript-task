
const student = {
    name: "Guruprasanna",
    rollNo: 107,
    class: "10th"
};

//Array
const marks = [85, 78, 92, 88, 76];


let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let average = total / marks.length;

//Ternary 
let grade =
    average >= 90 ? "A+" :
    average >= 80 ? "A" :
    average >= 70 ? "B" :
    average >= 60 ? "C" :
    "Fail";

let status = average >= 35 ? "Pass" : "Fail";


console.log("===== STUDENT REPORT CARD =====");
console.log(`Name      : ${student.name}`);
console.log(`Roll No   : ${student.rollNo}`);
console.log(`Class     : ${student.class}`);
console.log(`Marks     : ${marks}`);
console.log(`Total     : ${total}`);
console.log(`Average   : ${average}`);
console.log(`Grade     : ${grade}`);
console.log(`Status    : ${status}`);
console.log("==============================");

let EmployeeName= prompt("Enter Student name");
let EmployeeAge = prompt(" Enter Student rollno ");
confirm("Do you complete homework?");
alert("Thank you");

alert(
`Report Card

Name: ${student.name}
Total: ${total}
Average: ${average}
Grade: ${grade}
Status: ${status}`
);
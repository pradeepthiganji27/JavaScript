const employeeId = 27
let employeeEmail = "pradeepthi@gmail.com"
var employeePassword = "12345"
employeeCity = "Hyderabad"
let employeeStatus;
//employeeId = 2 -- cannot be changed, we are using const keyword

employeeEmail = "deepu@gmail.com"
employeePassword = "2709"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(employeeId);
console.table([employeeId, employeeEmail, employeePassword, employeeCity,employeeStatus])
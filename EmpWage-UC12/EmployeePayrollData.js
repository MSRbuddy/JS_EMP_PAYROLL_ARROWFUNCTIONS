// UC12 --> Perform a class implementation for the employee payroll data
class EmployeePayrollData
{
    // Property defining the data instances
    id; 
    name;
    salary;
    // Parameterised constructor to initialise the data instances with value passed
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // Using a member instance to display the stored details of the employees
    // Returning a string representation of employees data
    toString()
    {
        return `\n ID : ${this.id} , Name : ${this.name} , Salary : ${this.salary}`;
    }
}
// Creating an instance of the class with data instance values
let employeesPayrollData = new EmployeePayrollData(1, "Varun", 50000);
// Printing the details of the object using the toString method
console.log(employeesPayrollData.toString());
// Reinitializing the instance of the class with a different values
employeesPayrollData.name = "Gopi";
// Printing the details of the object using the toString method after reinitialising the instance member
console.log(employeesPayrollData.toString());
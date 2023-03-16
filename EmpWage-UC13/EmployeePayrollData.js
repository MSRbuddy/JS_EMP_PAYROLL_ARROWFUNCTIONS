// UC12 --> Perform a class implementation for the employee payroll data
class EmployeePayrollData
{
    // Property defining the data instances
    id; 
    name;
    salary;
    // UC13 -- Adding the gender and start date to employee payroll class
    gender;
    startDate;
    // Parameterised constructor to initialise the data instances with value passed
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    // Using a member instance to display the stored details of the employees
    // Returning a string representation of employees data
    toString()
    {
        // UC13 -- Adding the date in short representation
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const emplpyeeStartDate = this.startDate == undefined ? "Undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `\n ID : ${this.id} , Name : ${this.name} , Salary : ${this.salary}, Gender = ${this.gender}, Start Date : ${emplpyeeStartDate}`;
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
// Creating an instance of the class with data instance values
let otherEmployeesPayrollData = new EmployeePayrollData(1, "Terissa", 40000, "F", new Date());
// Printing the details of the object using the toString method
console.log(otherEmployeesPayrollData.toString());
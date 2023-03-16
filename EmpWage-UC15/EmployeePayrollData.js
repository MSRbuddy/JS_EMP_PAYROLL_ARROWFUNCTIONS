// UC12 --> Perform a class implementation for the employee payroll data
class EmployeePayrollData
{
    // Property defining the data instances
    salary;
    // Using getters and setters for name
    get name() { return this._name; }
    set name(value) 
    {
        let NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(NAME_REGEX.test(value))
        {
            console.log(value + ' is a valid name');
            this._name = value;
        }
        else
        throw "Invalid Name";
    }
    // Getter and Setter for the id of the employee
    get id() { return this._id; }
    set id(value)
    {
        if(value > 0)
        {
            console.log("Valid Id");
            this._id = value;
        }
            else
            throw "Invalid ID";
    }
    // Getter and Setter for the gender of the employee
    get gender() { return this._gender; }
    set gender(value)
    {
        let GENDER_REGEX = RegExp('^[M,F,m,f]{1}$');
        if(GENDER_REGEX.test(value))
        {
            console.log("Valid gender");
            this._gender = value;
        }
        else
        throw "Kindly enter gender as M or F";
    }
    // Getter and Setter for the gender of the employee
    get startDate() { return this._startDate; }
    // Setter for the gender of the employee
    set startDate(value)
    {
        if(value <= new Date())
        {
            console.log("Valid Date");
            this._startDate = value;
        }
        else
        throw "A future date is not accepted";
    }
    // UC13 -- Adding the gender and start date to employee payroll class
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
let employeesPayrollData = new EmployeePayrollData(1, "Varun", 50000, "M", new Date(2014, 04, 12));
// Printing the details of the object using the toString method
console.log(employeesPayrollData.toString());
try
{
    // Reinitializing the instance of the class with a different values
    employeesPayrollData.name = "Gopi";
    // Printing the details of the object using the toString method after reinitialising the instance member
    console.log(employeesPayrollData.toString());
}
catch (err) {console.error(err);}
// Creating an instance of the class with data instance values
let otherEmployeesPayrollData = new EmployeePayrollData(1, "Terissa", 40000, "F", new Date());
// Printing the details of the object using the toString method
console.log(otherEmployeesPayrollData.toString());

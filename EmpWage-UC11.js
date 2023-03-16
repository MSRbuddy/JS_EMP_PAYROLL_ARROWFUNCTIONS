// UC 1 -- To check for the attendance of the employee
const IS_ABSENT = 0;
let employeeCheck = Math.floor((Math.random()*10) % 2);
if(employeeCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}

// UC 2 -- Check for daily wage based on whether the employee is part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function GetEmployeeHour(employeeTypeCheck)
{
    switch(employeeTypeCheck)
    {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
let totalEmployeeHour = 0;
let totalWorkingDays = 0;

let employeeDailyWage = new Array();

let employeeDailyWageMap = new Map();

let employeeDailyHourMap = new Map();
// Array to store the object of the employee data -- daynumber, dailyHour, dailyWage, toString()
let employeeDailyHourAndWageArray = new Array();

//UC5 -- Replacing the for loop with the while loop and then evaluating the employee wage
while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmployeeHour <= MAX_HRS_IN_MONTH)
{
    totalWorkingDays++;
    let employeeTypeCheck = Math.floor((Math.random()*10) % 3);
    // Variable to store the employee working hours
    let employeeHours = GetEmployeeHour(employeeTypeCheck);
    // UC9 -- Adding the daily hour to the map
    employeeDailyHourMap.set(totalWorkingDays, employeeHours);
    // Incrementing the employee Hour from the value returned from the get employee hour class
    totalEmployeeHour += employeeHours;
    // UC6 -- Adding the daily wage to the array
    employeeDailyWage.push(calculateDailyWageOfEmployee(employeeHours));
    // UC8 -- Adding the daily wage to the map
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWageOfEmployee(employeeHours));
    // Pushing the object to the Array
    employeeDailyHourAndWageArray.push
    (
        {
            dayNumber : totalWorkingDays,
            dailyHour : employeeHours,
            dailyWage : calculateDailyWageOfEmployee(employeeHours),
            toString()
            {
                return `\n Day : ${this.dayNumber} , Working Hour : ${this.dailyHour} , Wage Earned : ${this.dailyWage}`;
            },
        }
    );
}
// Computing the employee wage
let employeeWage = calculateDailyWageOfEmployee(totalEmployeeHour);
// Printing the result of the calculation of the employee wages
console.log("Total Working days = "+ totalWorkingDays + "  Total Employee working hours = " + totalEmployeeHour + "  Employee Wage :" + employeeWage);

function calculateDailyWageOfEmployee(employeeHours)
{
    return (employeeHours * WAGE_PER_HOUR);
}

console.log("Daily Wage of Employee --->\n" + employeeDailyWage);

console.log("Daily Wage of Employee as Map --->\n");

var mapEntries = employeeDailyWageMap.entries();
for(var element of mapEntries) 
console.log(element);

// UC 7 --> Using the array helper class to perform operations
let totalEmployeeWage = 0;
// Defining the callback function for the helper functions
function sum(dailyWage)
{
    totalEmployeeWage += dailyWage;
}
function totalWageResult(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
// UC-7a : Using the foreach and reduce array helper function
employeeDailyWage.forEach(sum, 0);
console.log("Employee daily wage using foreach = " + totalEmployeeWage);
console.log("Employee daily wage using reduce = " + employeeDailyWage.reduce(totalWageResult, 0));

// UC-7b : To show the day with daily wage using the array map helper function
let dayCounter = 0;
// Defining the callback function for the map array helper function
function MapDayWithDailyWage(dailyWage)
{
    dayCounter++;
    return dayCounter + "=" + dailyWage;
}
// Using the array map helper function to add the mapped element of the day with daily wage
let dayWithDailyWageMap = employeeDailyWage.map(MapDayWithDailyWage);
// Printing the array map data of day with daily wage
console.log("Day with Daily Wages Map ---> " + dayWithDailyWageMap);

// UC 7c : To show the day when the employee earned the full time wage
function FullTimeWageOfEmployee(dailyWage)
{
    return dailyWage.includes("160");
}
// Using the filter helper function to pass each element of the day to daily wage map and get only the full time earned wage
let fullDayWageForEmployeeArray = dayWithDailyWageMap.filter(FullTimeWageOfEmployee);
// Printing the result of the filter operation
console.log("Days when the employee earned the full time wage -->" + fullDayWageForEmployeeArray);

// UC 7d : To check for the first occurrence of the full time wage earned
function FindFirstFullTimeOccurence(dailyWage)
{
    return dailyWage.includes("160");
}
// Printing the result of the find operation
console.log("First day when the employee earned the full time wage --> " + dayWithDailyWageMap.find(FindFirstFullTimeOccurence));

// UC 7e : To check for every full time wage in map has full time wage or not
function IsAllFullTimeWage(dailyWageFromMap)
{
    return dailyWageFromMap.includes("160");
}
// Printing the result of the every operation
console.log("Checking whether all the full time contains full time wage --> " + fullDayWageForEmployeeArray.every(IsAllFullTimeWage));

// UC 7f : Check whether there is any part time wages
function FindWhetherThereIsPartTime(dailyWage)
{
    return dailyWage.includes("80");
}
// Printing the result of the some array helper operation
console.log("Check if any part time wage or not -->" + dayWithDailyWageMap.some(FindWhetherThereIsPartTime));

// UC 7g : Find the number of hte days the employee has worked for each
// Logic --> if the employee daily wage = 0 i.e. the employee was absent on that day then return the current value only
function TotalWorkingDays(numberOfDays, dailyWage)
{
    if(dailyWage > 0)
    return numberOfDays+1;
    return numberOfDays;
}
// Printing the result of the reduce array helper operation
console.log("Number of Days the employee worked for -->" + employeeDailyWage.reduce(TotalWorkingDays, 0));

// UC8 -- Printing the total wage using the map of employee wage and working days
// Basically converting the values part of the map to the array object using from and then using the reduce array helper function
console.log("Total Wage of Employee using map of employee -->" + Array.from(employeeDailyWageMap.values()).reduce(totalWageResult, 0));

// UC9 -- Printing the day number and the working hours for the day
employeeDailyHourMap.forEach((values, keys, map) =>
{
    console.log(keys + ": " + values);
});
// UC9a -- Calculate total wage and total hours worked for an employee
// Defining an arrow function to aggregate the daily wage to totalWage or daily hour to totalHours
const calculateTotalWageOrHour = (totalValue, dailyValue) =>
{
    return totalValue + dailyValue;
}
// Using reduce function to iterate over the values of map as an array to get the total hour
let totalHours = Array.from(employeeDailyHourMap.values()).reduce(calculateTotalWageOrHour, 0);
// Using the filter function to calculate the total salary from the employee daily wage array
let totalWage = employeeDailyWage.filter(dailyWage => dailyWage > 0).reduce(calculateTotalWageOrHour, 0);
// Printing the result to the console
console.log("Employee Wage with arrow function :" + "Total Wage = " + totalWage + "  ,  Total Hours = " + totalHours);

// UC9b -- Find fullTime day number and part time day number and non working days number
// Array to store the non earning day
let nonWorkingDays = new Array();
// Array to store the part time earning day
let partWorkingDays = new Array();
// Array to store the full time earning day
let  fullworkingDays = new Array();
// Iterating over the daily hour map to group the data value wise
employeeDailyHourMap.forEach((value, key, map) =>
{
    if(value == 8) fullworkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
// Printing the result to the console
console.log("Days when the employee earned the full time wage --> " + fullworkingDays);
console.log("Days when the employee earned no wage --> " + nonWorkingDays);
console.log("Days when the employee earned the part time wage --> "+partWorkingDays);
// UC10 --> Storing the detail of the employee in the object
console.log("Showing Employee Details -->");
console.log(employeeDailyHourAndWageArray.toString());
// UC11a -- Calculate total wage and total working hours using arrow function
// Calculating the total wage by applying filter to the object array and then aggregrate the total wage or hour to print total Wage or Hours for employees
let totalWageForEmployees = employeeDailyHourAndWageArray.filter
(dailyHourAndWage => dailyHourAndWage.dailyWage > 0).reduce((totalWage, dailyHourAndWage) => totalWage += dailyHourAndWage.dailyWage, 0);
let totalHoursForEmployees = employeeDailyHourAndWageArray.filter
(dailyHourAndWage => dailyHourAndWage.dailyWage > 0).reduce((totalHours, dailyHourAndWage) => totalHours += dailyHourAndWage.dailyHour, 0);
// UC11a --> Printing the  result of arrow function return to the console 
console.log("\nTotal Wage = "+totalWageForEmployees + " , Total Hours = " + totalHoursForEmployees);
// UC11b --> Sorting the details for the full time wage earned data details from object
process.stdout.write("\n\nFull Time Wage day data details -->\n");
employeeDailyHourAndWageArray.filter(dailyHourAndWage => dailyHourAndWage.dailyHour == 8).forEach
((dailyHourAndWage) => process.stdout.write(dailyHourAndWage.toString()));
// UC11c --> Sorting the details for the part time wage earned data details from object
process.stdout.write("\n\nPart Time Wage day data details -->\n");
employeeDailyHourAndWageArray.filter(dailyHourAndWage => dailyHourAndWage.dailyHour == 4).forEach
((dailyHourAndWage) => process.stdout.write(dailyHourAndWage.toString()));
// UC11d --> Sorting the details for the no wage earned data details from object
process.stdout.write("\n\nNo Wage Earning day data details -->\n");
employeeDailyHourAndWageArray.filter(dailyHourAndWage => dailyHourAndWage.dailyHour == 0).forEach
((dailyHourAndWage) => process.stdout.write(dailyHourAndWage.toString()));

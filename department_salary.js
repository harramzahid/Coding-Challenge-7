// Task 1: Create a Department Structure
// for this task we are creating an object called company with many properties in it
// these properties will be used by us in the future to calculate the employee's salary

const company = {
    departments: [
        {departmentName: "Engineering",
            employees: [
                {
                    name: "Ali",
                    salary: 100000,
                    subordinates: [
                        {
                            name: "Luna",
                            salary: 80000,
                            subordinates: [
                                {
                                    name: "Pistachio",
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                }, 
                {
                    name: "Barish",
                    salary: 90000,
                    subordinates: []
                }    
            ]
        },
        {departmentName: "Sales",
            employees: [
                {
                    name: "Bounty",
                    salary: 85000,
                    subordinates: [
                        {
                            name: "Natalie",
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Korpo",
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

console.log("Company structure:", company)

//Task 2 Create a Recursive Function to Calculate Total Salary for a Department
// in this fucntion we will calculate the total salaries of the department usig the employees, as well as their subordinates
function calculateDepartmentSalary(departmentName) {
    const department = company.departments.find(department => department.departmentName === departmentName);

         function calculateEmployeeSalary(employee) {
             let totalSalary = employee.salary;

        const subordinates = employee.subordinates;
        for (let subordinate of subordinates) {
            totalSalary += calculateEmployeeSalary(subordinate);
        }
    return totalSalary;
    }

    let totalDepartmentSalary = 0;
    for (let employee of department.employees) {
        totalDepartmentSalary += calculateEmployeeSalary(employee);   
    }
    return totalDepartmentSalary;
}

console.log(`For the "Engineering" department, the total salary is $${calculateDepartmentSalary("Engineering")}.`);
console.log(`And for the "Sales" department The Total Salary is $${calculateDepartmentSalary("Sales")}.`);

//Task 3 Create a Function to Calculate the Total Salary for All Departments
// in this fucntion our job is to create a fucntion that calculates the salary of the entire company
function calculateCompanySalary(company) {
         function calculateEmployeeSalary(employee) {
              let totalSalary = employee.salary;
             const subordinates = employee.subordinates;
                for (let subordinate of subordinates) {
                 totalSalary += calculateEmployeeSalary(subordinate);
        }
        return totalSalary;
    }
    let totalCompanySalary = 0;
         for (let department of company.departments) {
             let totalDepartmentSalary = 0;
             for (let employee of department.employees) {
                totalDepartmentSalary += calculateEmployeeSalary(employee);
        }
        totalCompanySalary += totalDepartmentSalary;
    }
    return totalCompanySalary
}

console.log(`The total salary for the entire company is, $${calculateCompanySalary(company)}.`);

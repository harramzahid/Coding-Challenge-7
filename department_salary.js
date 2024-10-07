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
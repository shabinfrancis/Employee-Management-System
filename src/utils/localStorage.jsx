export const employees = [
    {
        "id": 1,
        "firstname": "John",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Submit Report",
                "taskDescription": "Submit the quarterly report to the manager.",
                "taskDate": "2025-01-23",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Attend the meeting with the client to discuss project updates.",
                "taskDate": "2025-01-20",
                "category": "Meetings"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Jane",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize the employee database for better performance.",
                "taskDate": "2025-01-24",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Code Review",
                "taskDescription": "Review the code submitted by the development team.",
                "taskDate": "2025-01-21",
                "category": "Review"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Emily",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create a presentation for the upcoming tech conference.",
                "taskDate": "2025-01-25",
                "category": "Presentation"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Michael",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform scheduled maintenance on the company server.",
                "taskDate": "2025-01-26",
                "category": "IT Support"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Sarah",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Customer Feedback Analysis",
                "taskDescription": "Analyze feedback from customer surveys.",
                "taskDate": "2025-01-22",
                "category": "Analysis"
            }
        ],
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    }
]

const admin = [
    {
        "id": 1,
        "firstname": "Admin",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const initializeLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
};

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = localStorage.getItem('employees')
    const admin = localStorage.getItem('admin')
    console.log(JSON.parse(employees))
    console.log(JSON.parse(admin))

    // console.log(employees, admin)
    return {employees, admin};
}
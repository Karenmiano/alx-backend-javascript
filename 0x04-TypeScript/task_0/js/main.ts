interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Mombasa',
};

const student2: Student = {
    firstName: 'Karen',
    lastName: 'Miano',
    age: 21,
    location: 'Nairobi',
};

const studentList: Student[] = [student1, student2];

// rendering a table to show students
const tableDiv = document.createElement('div');
let table = '<table>';
table += `<tr><th>First Name</th><th>Location</th></tr>`;
studentList.forEach((student) => {
    table += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr>`;
});
table += '</table>'

tableDiv.innerHTML = table;
document.body.appendChild(tableDiv);

// styling the table
const style = document.createElement('style');
style.innerHTML = `
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    table {
        width: 50%;
    }
`;
document.head.appendChild(style);

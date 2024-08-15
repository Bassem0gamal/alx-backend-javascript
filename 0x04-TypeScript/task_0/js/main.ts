interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Bassem",
    lastName: "Gamal",
    age: 25,
    location: "Egypt",
  };
  
  const student2: Student = {
    firstName: "Ahmed",
    lastName: "Gamal",
    age: 31,
    location: "Germany",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement("table");
  document.body.appendChild(table);
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    table.appendChild(row);
  });
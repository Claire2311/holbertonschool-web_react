interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Claire",
  lastName: "Girard",
  age: 39,
  location: "Lille",
};

const student2: Student = {
  firstName: "Nicolas",
  lastName: "Gege",
  age: 40,
  location: "La Capitale",
};

const studentsList: Student[] = [student1, student2];

// get the reference for the body
const body = document.getElementsByTagName("body")[0];

// creates a <table> element and a <tbody> element
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");

// creating all cells
for (var i = 0; i < studentsList.length; i++) {
  // creates a table row
  const row = document.createElement("tr");

  // Create a <td> element and a text node, make the text
  // node the contents of the <td>, and put the <td> at
  // the end of the table row
  const cell1 = document.createElement("td");
  const cellText = document.createTextNode(studentsList[i].firstName);
  cell1.appendChild(cellText);
  row.appendChild(cell1);

  const cell2 = document.createElement("td");
  const cellText2 = document.createTextNode(studentsList[i].location);
  cell2.appendChild(cellText2);
  row.appendChild(cell2);

  // add the row to the end of the table body
  tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);

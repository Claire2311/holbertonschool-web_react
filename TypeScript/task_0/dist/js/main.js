var student1 = {
    firstName: "Claire",
    lastName: "Girard",
    age: 39,
    location: "Lille",
};
var student2 = {
    firstName: "Nicolas",
    lastName: "Gege",
    age: 40,
    location: "La Capitale",
};
var studentsList = [student1, student2];
// get the reference for the body
var body = document.getElementsByTagName("body")[0];
// creates a <table> element and a <tbody> element
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
// creating all cells
for (var i = 0; i < studentsList.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell1 = document.createElement("td");
    var cellText = document.createTextNode(studentsList[i].firstName);
    cell1.appendChild(cellText);
    row.appendChild(cell1);
    var cell2 = document.createElement("td");
    var cellText2 = document.createTextNode(studentsList[i].location);
    cell2.appendChild(cellText2);
    row.appendChild(cell2);
    // add the row to the end of the table body
    tblBody.appendChild(row);
}
// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
//# sourceMappingURL=main.js.map
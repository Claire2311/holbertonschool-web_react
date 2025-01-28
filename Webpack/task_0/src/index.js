import $ from "jquery";

const paragraph1 = $("<p></p>").text("Holberton Dashboard");
const paragraph2 = $("<p></p>").text("Dashboard data for the students");
const paragraph3 = $("<p></p>").text("Copyright - Holberton School");
$("body").append(paragraph1).append(paragraph2).append(paragraph3);

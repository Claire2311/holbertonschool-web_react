import $ from "jquery";
import "./header.css";

const logo = $("<div id='logo'></div>").css({
  height: "200px",
  width: "200px",
});

const title = $("<h1></h1>").text("Holberton Dashboard");

$("body").append(logo).append(title);

console.log("Init header");

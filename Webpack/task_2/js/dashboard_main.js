import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

const logo = $("<div id='logo'></div>").css({
  height: "200px",
  width: "200px",
});
const paragraph1 = $("<p></p>").text("Holberton Dashboard");
const paragraph2 = $("<p></p>").text("Dashboard data for the students");
const paragraph3 = $("<p></p>").text("Copyright - Holberton School");
const countParagraph = $("<p id='count'></p>");
const button = $("<button>")
  .attr("type", "button")
  .text("Click here to get started");

$("body")
  .append(logo)
  .append(paragraph1)
  .append(paragraph2)
  .append(button)
  .append(countParagraph)
  .append(paragraph3);

let count = 0;
function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

$("button").on(
  "click",
  _.debounce(updateCounter, 500, {
    leading: true,
    trailing: false,
  })
);

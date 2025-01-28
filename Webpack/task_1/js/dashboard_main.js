import $ from "jquery";
import _ from "lodash";

let count = 0;
function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);

const paragraph1 = $("<p></p>").text("Holberton Dashboard");
const paragraph2 = $("<p></p>").text("Dashboard data for the students");
const paragraph3 = $("<p></p>").text("Copyright - Holberton School");
const countParagraph = $("<p></p>").attr("id", "count");
const button = $("<button>")
  .attr("type", "button")
  .text("Click here to get started")
  .on("click", debouncedUpdateCounter);

$("body")
  .append(paragraph1)
  .append(paragraph2)
  .append(button)
  .append(countParagraph)
  .append(paragraph3);

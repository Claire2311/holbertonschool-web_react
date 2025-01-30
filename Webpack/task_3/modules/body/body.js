import $ from "jquery";
import _ from "lodash";
import "./body.css";

const countParagraph = $("<p id='count'></p>");
const button = $("<button>")
  .attr("type", "button")
  .text("Click here to get started");

$("body").append(button).append(countParagraph);

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

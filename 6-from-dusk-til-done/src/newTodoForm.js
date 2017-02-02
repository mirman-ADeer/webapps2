import $ from "jquery";

import {addTodo} from "./actions";

export default function newTodoForm() {
  return $(document.createElement("form"))
  .append(
    $(document.createElement("div"))
    .addClass("input-field")
    .append(
      $(document.createElement("input"))
        .attr("type","text")
        .attr("id","new-todo-text")
      )
      .append(
        $(document.createElement("label"))
        .attr("for","new-todo-text")
        .text("New Todo")
      )
  )
  .append(
    $(document.createElement("button"))
    .attr("id","add-new-todo")
    .addClass("btn")
    .text("Add")
    .click((e) => {
      e.preventDefault();
      console.log("Adding a todo");
      const newTodo = {
        text: $("#new-todo-text").val()
      };
      addTodo([],newTodo);
    })
  )
}

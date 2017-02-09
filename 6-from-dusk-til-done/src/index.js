import $ from "jquery";
import {getTodos} from "./actions"
import newTodoForm from "./newTodoForm"

$(document).ready( () => {
  getTodos([]);
  $("#new-todo").append(
    newTodoForm()
  );
});

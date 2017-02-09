import $ from "jquery";
import {deleteTodo,updateTodo} from "./actions";

export default function todoListItem(todo) {
  return $(document.createElement("div"))
  .append(
      $(document.createElement("div"))
      .append(
        $(document.createElement("input"))
          .attr("type","checkbox")
          .attr("checked",todo.completed)
          .attr("id","checkbox"+todo.id)
          .click((e) => {
            const editedTodo = {
              id: todo.id,
              text: todo.text,
              completed: e.target.checked
            }
            updateTodo([],todo.id,editedTodo)
          })
      )
      .append(
        $(document.createElement("label"))
          .text(todo.text)
          .attr("for","checkbox"+todo.id)
      )
      .addClass("todo col s9")
  )
  .append(
    $(document.createElement("button"))
      .addClass("btn-floating waves-effect waves-light teal edit")
      .attr("id",`edit${todo.id}`)
      .attr("type","button")
      .append(
        $(document.createElement("i"))
          .addClass("material-icons")
          .text("edit")
      )
  )
  .append(
    $(document.createElement("button"))
      .addClass("btn-floating waves-effect waves-light red delete")
      .attr("type","button")
      .append(
        $(document.createElement("i"))
          .addClass("material-icons")
          .text("delete")
      )
      .click((e) => {
        e.preventDefault();
        if (confirm(`Are you sure you want to delete ${todo.text}?`)){deleteTodo([],todo.id)};
      })
  )
  .append(
    $(document.createElement("div"))
      .attr("id",`edit-todo-${todo.id}`)
      .append(
        $(document.createElement("input"))
        .attr("type", "text")
        .val(todo.text)
        .attr("id",`edit-todo-text-${todo.id}`)
      )
      .append(
        $(document.createElement("button"))
          .attr("type","button")
          .text("Save")
          .click((e) => {
            console.log("Saving todo");
            const editedTodo = {
              id: todo.id,
              text: $(`#edit-todo-text-${todo.id}`).val(),
              completed: $(`#checkbox${todo,id}`)
            }
            $(e.target).parent().slideUp();
            $(``)
          })
      )
      .hide();
  )
  .addClass("todoListItem row")
}

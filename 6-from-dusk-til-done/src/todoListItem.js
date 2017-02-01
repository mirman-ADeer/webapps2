import $ from "jquery";
import deleteTodo from "./actions";
import updateTodo from "./actions";

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
      .addClass("todo col s10")
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
        deleteTodo([],todo.id);
      })
  )
  .addClass("todoListItem row")
}

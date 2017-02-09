import $ from "jquery"
import todoListItem from "./todoListItem"
import newTodoForm from "./newTodoForm"

function updateTodos(todos) {
  $("#root").empty();
  todos.forEach((todo) => {
    $("#root").append(todoListItem(todo));
  });
}


export default function reducer(state, action) {
  switch(action.type) {
    case "RETRIEVE_TODOS":
      return $.ajax(
        "/todos",
        {
          method: "GET"
        }
      )
      .done( (res) => {
        console.log("Success!");
        updateTodos(res);
        return res;
      })
      .fail( () => {
        console.error("Something bad happened");
      });
      return state;
    case "DELETE_TODO":
      return $.ajax({
        type: "DELETE",
        url: `/todos/${action.id}`,
        contentType: "application/json"
      })
      .done((res) => {
        updateTodos(res);
        return res;
      })
    case "ADD_TODO":
      return $.ajax(
        "/todos",
        {
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify(action.newTodo)
        }
      )
      .done((res) => {
        updateTodos(res);
        return res;
      });
    case "UPDATE_TODO":
      return $.ajax({
        url: `/todos/${action.id}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(action.updatedTodo)
      })
      .done((res) => {
        return res;
      })
    default:
      return state;
  }
}

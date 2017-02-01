import $ from "jquery"

function updateTodos(todos) {
  $("#root").empty();
  todos.forEach((todo) => {
    $("#root").append(todoListItem(todo));
  });
  $("#new-todo").append(
    newTodoForm()
  );
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
      .done( (data) => {
        console.log("Success!");
        updateTodos(data);
        return data;
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
        updateTodos(data);
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
        updateTodos(data);
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
        updateTodos(res);
        return res;
      })
    default:
      return state;
  }
}

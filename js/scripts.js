// Business Logic
function Todo(todo) {
  this.todo = todo;
}

// User Interface Logic
$(document).ready(function() {
  $("form#new-todolist").submit(function(event) {
    event.preventDefault();

    var inputtedTodo = $("input#new-todo").val();
    var newTodo = new Todo(inputtedTodo);

    $("ul#todos").append("<li><span class='todo'>" + newTodo.todo + "</span>" + "<span class='done'>-remove</span></li>");

    $(".done").last().click(function() {
      var listItems = document.getElementsByTagName("li");
        for (var i = 0; i < listItems.length; i++) {
          listItems[i].onclick = function() {this.parentNode.removeChild(this)
            ;}
          }
    });

    $("input#new-todo").val("");
  });
});

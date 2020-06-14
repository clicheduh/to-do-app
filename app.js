var inputTodo = $("#todo-input input");
var addButton = $("#todo-input button");
var newTodo,
  newHtml,
  counter = 0;

// Add new To-do
addButton.on("click", () => {
  if (inputTodo.val() !== "") {
    newTodo = inputTodo.val();
    newHtml = `
            <div class="todo-list">
                <div class="item">
                    <p></p>
                </div>
            </div>
        `;
    $(".wrapper").append(newHtml);
    $(".wrapper div:last p").prepend(newTodo).addClass("trash");
  } else {
    $("input")
      .delay(500)
      .fadeTo(200, 0.2)
      .fadeTo(200, 0.8)
      .fadeTo(200, 0.2)
      .fadeTo(200, 0.8)
      .fadeTo(200, 0.2)
      .fadeTo(200, 0.8)
      .fadeTo(200, 0.2)
      .fadeTo(200, 0.8)
      .fadeTo(200, 0.2)
      .fadeTo(200, 1);

    var success1 = $("#myGif").slideToggle(500).delay(2000).slideToggle(500);
  }
  inputTodo[0].value = "";

  $(".trash").on("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });
});

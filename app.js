var inputTodo = $("#todo-input input");
var addButton = $("#todo-input button");
var newTodo, newHtml;

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
    $("input") // rapid blinking of input field
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

    $("#myGif").show(500).delay(2000).hide(500); // animating the gif
  }
  inputTodo[0].value = ""; // clearing input field after clicking "add to-do" button

  // Delete To-do
  $(".trash").on("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });
});

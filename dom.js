// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      //we need to add an element inside it to create a description
      var span = document.createElement("SPAN");
      var text = document.createTextNode(todo.description);
      span.appendChild(text);
      todoNode.appendChild(span);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className = "delete-button";
    deleteButtonNode.innerHTML = "<img src=\"./img/multiply.svg\" class=\"delete\">"
    deleteButtonNode.addEventListener('click', function(event) {
      // event.preventDefault();
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.className = "mark-button";
    markButtonNode.innerHTML = "<img src=\"./img/checked.svg\" class=\"checked\">"
    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(state);
    });
    todoNode.appendChild(markButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      event.preventDefault();
      // what is inside event.target
      // event.target ....
      var fieldInput = event.target[0].value;
      var newID = todoFunctions.generateId();

      var newObj = {
        id: newID,
        description: fieldInput,
        done: false
      }

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, newObj);

      //create object with 'id' from todofuctinos.generateid

      //and a decsription from fieldinput; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
//iterates through the list to create lis
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
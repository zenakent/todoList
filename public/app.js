$(document).ready(() => {
    $.getJSON("/api/todos")
    .then(addTodos);
    
    $("#todoInput").keypress(function(event) {
        if (event.which == 13) {
            createTodo();
        }
    });
    
    $('.list').on('click', 'li', function() {
       updateTodo($(this));
   })
    
   $('.list').on('click', 'span', function(e) {
       e.stopPropagation();
       removeTodo($(this).parent());
   });
});


//show Todo list to the page
function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

//add todo to the todos
const addTodo = (todo) => {
    const newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
        newTodo.data('id', todo._id); //gets the id of the single todo
        newTodo.data('completed', todo.completed);
        if (todo.completed) {
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
};

//send request to create new todo
const createTodo = () => {
    const usrInput = $('#todoInput').val();
    $.post('api/todos', {name: usrInput})
    .then((newTodo) => {
        $('#todoInput').val("");
        addTodo(newTodo);
        
    })
    .catch((err) => {
        console.log(err);
    });
};


//remove TODO
const removeTodo = (todo) => {
    let clickedId = todo.data('id');
    let deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then((data) => {
        todo.remove();
    })
    .catch((err) => {
        console.log(err);
    });
};

//updateTodo 
const updateTodo = (todo) => {
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then((updatedTodo) => {
        todo.toggleClass("done");
        todo.data('completed', isDone);
    });
};
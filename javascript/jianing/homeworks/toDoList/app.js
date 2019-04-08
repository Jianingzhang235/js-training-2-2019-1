
	
// var loadLocalStorage = function () {
// 	var keys = Object.keys(localStorage)
// 	var htmlString = '';
// 	for (var i = 0; i < keys.length; i++) {
// 		htmlString += `<li>${localStorage[keys[i]]}</li>`;
// 	}
	
// 	$('.todoList').html(htmlString);
   
// }


$(document).ready(function() {

  var localStorage = window.localStorage;
  var int = localStorage.getItem('el');
  var todoList = JSON.parse(localStorage.getItem('todoList'));
  var destroy = '';


 if (todoList !== null) {
    for (var i = 0; i < todoList.length; i++) {
      var item = todoList[i];
      if (item.isCompleted) {
        $(".todoList").append(`
        <li>
          <label id="el">${item.el}</label> 
          <i class="fa fa-circle-thin completed" aria-hidden="true"></i>
          <label>${todo}</label>
          <i class="fa fa-remove pull-right destroyTodo" aria-hidden="true"></i>
        </li>`);
      } else {
        $(".todoList").append(`
        <li>
          <label id="el">${item.el}</label> +
          <i class="fa fa-circle-thin uncompleted" aria-hidden="true"></i>
          <label>${todo}</label>
          <i class="fa fa-remove pull-right destroyTodo" aria-hidden="true"></i>
        </li>`);
      }
    }
  }
 
 
//type in todo item, and then push down enter key, show  todolist bellow the input element
   $(".newTodo").keydown(function(event) {
      var todo = $(".newTodo").val().trim();
     if (event.which === 13 && todo.length > 0) {
     	int++;

     	var $todoList = $(`
      	<li>   	
      	   <label id="el">${int}</label>    
      	   <i class="fa fa-circle-thin uncompleted" aria-hidden="true"></i>
      	   <label>${todo}</label>
      	   <i class="fa fa-remove pull-right destroyTodo" aria-hidden="true"></i>
      	</li>`);  
       $(".todoList").append($todoList);


       $(".newTodo").val("");
     }
   });

   //

 

 $(".todoList").on('click', 'i', function(e) {
    var $this = $(this);
    var deleteId = $this.parent().find('#el').text();
    if ($this.hasClass('destroyTodo')) {
      deleteTodoItem();
      $this.parent().remove();
    } else if ($this.hasClass('uncompleted')) {
      $this.removeClass('uncompleted fa-circle-thin');
      $this.addClass('fa-check-circle completed');
      $this.next().addClass('labelDeletedTodo');
    } else if ($this.hasClass('completed')) {
      $this.removeClass('completed fa-check-circle');
      $this.addClass('fa-circle-thin uncompleted');
      $this.next().removeClass('labelDeletedTodo');
    }
  });


  $('#todo_all').on('click', '', function() {
    $(this).addClass('labelselected');
  })

  //add new todolist item, update id and todoList
  
  function addNewTodoItem(inputVal) {
    localStorage.setItem('el', int);
    if (todoList === null) {
      todoList = [];
    }
    var todoListItem = {
      el: int,
      toDoItem: inputVal,
      IsCompleted: false
    }
    todoList.push(todoListItem);
    localStorage.setItem('TodoList', JSON.stringify(todoList));
  }

  //删除todo item
  //清除localstorage
  function deleteTodoItem() {
    if (deleteId === null) {
      alert('删除任务项失败');
    } else {
      todoList = todoList.filter(filterById);
      localStorage.setItem('TodoList', JSON.stringify(todoList));
    }
  }

  function filterById(item) {
    return item.el != deleteI;
  }
});
 

  





















// <body>
// 	<section>
// 	    <header>
// 	        <h1>todos</h1>
// 	        <input class="newTodo" placeholder="What needs to be done?" autofocus>
//      </header>
//      <section class="main">
//           <ul class="todo-list"></ul>
// 		</section>
// 		<footer class="footer"></footer>
//     </section>
// 	<footer class="info">
// 		<p>Double-click to edit a todo</p>
// 		<p>Created by Jianing Zhang</p>
// 	</footer>

//     <script src="app.js"></script>
// </body>

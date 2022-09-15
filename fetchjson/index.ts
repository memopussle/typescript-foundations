import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

//interface: define a structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // find properties in todo
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed);
};

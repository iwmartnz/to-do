import { useState } from "react";
import AddTodoButton from "./AddToDoButton";
import List from "./List";

//Este array contiene una lista de tareas por defecto para mostrar contenido en el componente de lista de tareas
import mockTodos from "/src/mocks/todos.json";

export default function Dashboard() {
  const [todoList, setTodoList] = useState(mockTodos);

  //Esta funcion crea una nueva tarea y la agrega a la lista de tareas existentes
  const handleAddTodo = ({ title, details }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      details,
      completed: false,
    };
    const newTodos = [newTodo, ...todoList];
    setTodoList(newTodos);
  };

  const handleEditTodo = ({ updatedTodo }) => {};

  //Esta funcion filtra la lista de tareas removiendo la tarea seleccionada utilizando el valor de la propiedad ID del objeto
  const handleRemoveTodo = (id) => {
    const newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodos);
  };

  //Esta funcion cambia el valor de la propiedad completed a true dentro del objeto todo
  const handleCompleteTodo = (id, completed) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }

      return todo;
    });
    setTodoList(newTodos);
  };

  return (
    <main className=" bg-base-300 w-full max-w-xl mx-auto p-4 rounded-xl">
      <AddTodoButton setTodoList={setTodoList} onAddTodo={handleAddTodo} />
      <List
        todoList={todoList}
        onEditTodo={handleEditTodo}
        onRemoveTodo={handleRemoveTodo}
        onCompleteTodo={handleCompleteTodo}
      />
    </main>
  );
}

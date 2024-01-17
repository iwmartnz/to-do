import Todo from "./Todo";

export default function List({
  todoList,
  onEditTodo,
  onRemoveTodo,
  onCompleteTodo,
}) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onEditTodo={onEditTodo}
            onRemoveTodo={onRemoveTodo}
            onCompleteTodo={onCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

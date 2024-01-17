import EditTodoModal from "./EditTodoModal";

export default function Todo({
  todo,
  onEditTodo,
  onRemoveTodo,
  onCompleteTodo,
}) {
  return (
    <>
      <div
        className=" flex justify-between  rounded-xl py-4 px-2 gap-3 hover:bg-base-100"
        onDoubleClick={() =>
          document.getElementById("my_modal_edit").showModal()
        }
      >
        <input
          type="checkbox"
          checked={todo.completed}
          className=" checkbox rounded-full"
          onChange={() => {
            onCompleteTodo(todo.id, todo.completed);
          }}
        />
        <div
          className={`flex flex-col flex-1 ${
            todo.completed && " line-through text-neutral-600"
          }`}
        >
          <h2>{todo.title}</h2>
          {todo.details && (
            <p className="text-sm text-neutral-400">- {todo.details}</p>
          )}
        </div>
        <div className="gap-2 flex">
          <button
            className=" btn btn-circle btn-sm h-fit"
            onClick={() => {
              onRemoveTodo(todo.id);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L12 12M18 6L14 10M6 6L12 12M18 18L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <EditTodoModal todo={todo} onEditTodo={onEditTodo} />
    </>
  );
}

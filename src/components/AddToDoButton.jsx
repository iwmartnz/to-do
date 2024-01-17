import { useState } from "react";
import CreateTodoModal from "./CreateTodoModal";

export default function AddTodoButton({ onAddTodo }) {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal").showModal()}
        className="btn btn-accent btn-outline w-full flex items-center justify-between"
      >
        Crear tarea
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.83209C14.7751 2.2969 13.4222 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.74835 21.2558 7.67051 20 5.99902M8 12H12M12 12H16M12 12V8M12 12V16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <CreateTodoModal onAddTodo={onAddTodo} />
    </div>
  );
}

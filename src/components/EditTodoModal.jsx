import { useState } from "react";

export default function EditTodoModal({ onEditTodo, todo }) {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const closeModal = () => {
    document.getElementById("my_modal_edit").close();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUpdatedTodo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedTodo);
    if (tododata.title == "") {
      return null;
    } else {
      onEditTodo({ title: updatedTodo.title, details: updatedTodo.details });
      closeModal();
    }
  };
  return (
    <dialog className="modal" id="my_modal_edit">
      <div className=" modal-box">
        <h2 className=" font-semibold pb-4">Nueva tarea</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="¿Qué desea hacer?"
            name="title"
            value={updatedTodo.title}
            onChange={handleChange}
          />
          <textarea
            cols="30"
            rows="10"
            name="details"
            value={updatedTodo.details}
            onChange={handleChange}
            className=" textarea textarea-bordered w-full"
            placeholder="En este espacio puede agregar detalles importantes de su tarea"
          ></textarea>
          <div className=" modal-action">
            <button
              className={` btn ${
                updatedTodo.title ? "btn-primary" : "btn-disabled"
              }`}
            >
              Guardar
            </button>
            <button className=" btn" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

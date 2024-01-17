import { useState } from "react";

export default function CreateTodoModal({ onAddTodo }) {
  const [tododata, setTodoData] = useState({
    title: "",
    details: "",
  });
  const closeModal = () => {
    document.getElementById("my_modal").close();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTodoData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tododata.title == "") {
      return null;
    } else {
      onAddTodo({ title: tododata.title, details: tododata.details });
      closeModal();
      setTodoData({ title: "", details: "" });
    }
  };
  return (
    <dialog className="modal" id="my_modal">
      <div className=" modal-box">
        <h2 className=" font-semibold pb-4">Nueva tarea</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="¿Qué desea hacer?"
            name="title"
            value={tododata.title}
            onChange={handleChange}
          />
          <textarea
            cols="30"
            rows="10"
            name="details"
            value={tododata.details}
            onChange={handleChange}
            className=" textarea textarea-bordered w-full"
            placeholder="En este espacio puede agregar detalles importantes de su tarea"
          ></textarea>
          <div className=" modal-action">
            <button
              className={` btn ${
                tododata.title ? "btn-primary" : "btn-disabled"
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

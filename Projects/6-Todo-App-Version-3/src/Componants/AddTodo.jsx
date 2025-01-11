import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameOnChg = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateOnChg = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddBtnClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6 input">
          <input
            value={todoName}
            type="text"
            placeholder="Enter to do Here"
            onChange={handleNameOnChg}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateOnChg}
            value={todoDate}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="todo-button btn btn-success"
            onClick={handleAddBtnClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

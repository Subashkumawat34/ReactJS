import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  // const handleNameOnChg = (event) => {
  //   setTodoName(event.target.value);

  // };

  // const handleDateOnChg = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddBtnClicked = (event) => {
    event.preventDefault();
    if (todoNameElement.current.value && todoDateElement.current.value !== "") {
      const todoName = todoNameElement.current.value;
      const todoDate = todoDateElement.current.value;
      todoNameElement.current.value = "";
      todoDateElement.current.value = "";
      onNewItem(todoName, todoDate);
      // setTodoDate("");
      // setTodoName("");
    } else {
      alert("Both Fields are Required");
      return;
    }
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddBtnClicked}>
        <div className="row todo-row">
          <div className="col-6 input">
            <input
              type="text"
              placeholder="Enter to do Here"
              ref={todoNameElement}
              //onChange={handleNameOnChg}
              // value={todoName}
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={todoDateElement}
              //onChange={handleDateOnChg}
              //value={todoDate}
            ></input>
          </div>
          <div className="col-2">
            <button type="submit" className="todo-button btn btn-success">
              <MdOutlinePlaylistAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

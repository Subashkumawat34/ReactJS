function TodoItem2() {
  let name = "Learn DSA With Java";
  let date = " 15/1/2025";
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="todo-button btn btn-danger ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;

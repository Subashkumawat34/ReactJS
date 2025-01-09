function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do Here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="todo-button btn btn-success">
            success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

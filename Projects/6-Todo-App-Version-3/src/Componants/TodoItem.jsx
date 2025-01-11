function TodoItem({ name, date, OnDeleteClick }) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => OnDeleteClick(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

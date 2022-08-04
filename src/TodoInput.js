const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder="Create a new todo"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button className="add-todo" onClick={addTodo}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;
import {useState} from 'react';
import Link from 'next/link';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <div>
      <div className='navbar'>
        <div className='box'>
          <Link href='/about'>About</Link>
        </div>
        <div className='box'>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container">
        <img src="/image.webp" alt='webp' />
        <h1>Todo App</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <div className='btn'>
            <button type="submit">Add Todo</button>
          </div>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
              <span onClick={() => markTodo(todo.id)}>{todo.text}</span>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
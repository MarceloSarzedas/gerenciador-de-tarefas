import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React',
      category: 'trabalho',
      completed: false
    },
    {
      id: 2,
      text: 'Vue',
      category: 'estudos',
      completed: false
    },
    {
      id: 3,
      text: 'Angular',
      category: 'pessoal',
      completed: false
    },
    {
      id: 4,
      text: 'Svelte',
      category: 'pessoal',
      completed: false
    },
  ])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {
    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      completed: false
    }
    ]
    setTodos(newTodos)
  }

  const removerTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo_list">
        {todos
         .filter((todo) => {
          if (filter === 'ALL') {
            return true; // Retorna todas as tarefas
          } else if (filter === 'completed') {
            return todo.completed; // Retorna apenas as tarefas completadas
          } else {
            return !todo.completed; // Retorna apenas as tarefas não completadas
          }
          
        })
        
          
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removerTodo={removerTodo}
              completeTodo={completeTodo}
            />
          ))}
          
      </div>
      <TodoForm addTodo={addTodo} />
      
    </div>
  )
}

export default App


import { useState } from 'react'

import PropTypes from 'prop-types'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return
    addTodo(value, category)
    setCategory('')
    setValue('')
  }

  return (
    <div className="todo_form">
      <h2>Criar tarefas:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>

          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoForm

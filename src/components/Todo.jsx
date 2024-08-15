import PropTypes from 'prop-types';// sem fucionar

const Todo = ({ todo, removerTodo, completeTodo}) => {
  return (
    <div
     className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
          <div className='content'>
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </div>
          <div>
          <button className="completo" 
          onClick={()=> completeTodo(todo.id)}>
            completa</button>
          
          <button className="remover" 
          onClick={()=> removerTodo(todo.id)}>
          excluir</button>
          </div>
        </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removerTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};// sem fucionar
export default Todo
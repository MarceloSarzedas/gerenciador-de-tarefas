
import PropTypes from 'prop-types';// sem fucionar
import { VscChromeClose, VscCheck } from "react-icons/vsc";
/*  import { VscEdit } from "react-icons/vsc";  */ 
const Todo = ({ todo, removerTodo, completeTodo, /* editarTodo */ }) => {
  
  return (
    <div
      className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <div className='content'>
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div>
       {/*  <button className="editar" 
        onClick={() => editarTodo(todo.id)}>
          <VscEdit /></button>  */}

        <button className="completo"
          onClick={() => completeTodo(todo.id)}>
          <VscCheck /></button>

        <button className="remover"
          onClick={() => removerTodo(todo.id)}>
          <VscChromeClose /></button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removerTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  /* editarTodo: PropTypes.func.isRequired, */
};// sem fucionar
export default Todo
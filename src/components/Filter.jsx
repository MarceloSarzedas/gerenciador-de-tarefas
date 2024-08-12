import PropTypes from 'prop-types';//sem fucionar
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="Filter">
      <h2>Filtrar:</h2>
      <div className="filter_options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="ALL">Todas</option>
            <option value="completed">Completas</option>
            <option value="incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  )
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};// sem fucionar
export default Filter
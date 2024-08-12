import PropTypes from 'prop-types';// sem fucionar


const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        type="text"
        placeholder="Digite aqui"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};// sem fucionar
export default Search

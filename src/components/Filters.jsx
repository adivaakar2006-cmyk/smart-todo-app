import './Filters.css';

export default function Filters({ 
  currentFilter, setFilter, 
  currentCategory, setCategory, 
  searchQuery, setSearchQuery,
  sortType, setSortType,
  counts 
}) {
  return (
    <div className="filters-container glass-panel">
      <div className="filter-row top-row">
        <input 
          type="text" 
          className="input search-input" 
          placeholder="Search tasks..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <select 
          className="select sort-select"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="manual">Manual Order (Drag & Drop)</option>
          <option value="dateAsc">Due Date (Earliest)</option>
          <option value="dateDesc">Due Date (Latest)</option>
        </select>
      </div>

      <div className="filter-row bottom-row">
        <div className="filter-tabs">
          <button className={`filter-tab ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All <span className="count">{counts.all}</span>
          </button>
          <button className={`filter-tab ${currentFilter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>
            Active <span className="count">{counts.active}</span>
          </button>
          <button className={`filter-tab ${currentFilter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>
            Completed <span className="count">{counts.completed}</span>
          </button>
        </div>

        <div className="category-filter">
          <select className="select filter-select" value={currentCategory} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
      </div>
    </div>
  );
}

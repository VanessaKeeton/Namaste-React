import { useState } from "react";
const FilterRestaurants = ({ onSearch, onFilterTopRated, onFilterReset }) => {
  const [searchText, setSearchText] = useState([]);

  const searchRestaurants = () => {
    onSearch(searchText);
  }

  const filterTopRated = () => {
    onFilterTopRated();
  }

  const resetData = () => {
    onFilterReset();
  }

  return (
  <div className="filter">
    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    <button type="button" className="filter__button" onClick={searchRestaurants}>
      Search
    </button>
    <button type="button" className="filter__button" onClick={filterTopRated}>
      Top Rated Restaurants
    </button>
    <button type="button" className="filter__button" onClick={resetData}>
      Clear Filter
    </button>
  </div>
  );
}

export default FilterRestaurants;

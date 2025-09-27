import { useState } from "react";
const FilterRestaurants = ({ onSearch, onFilterTopRated, onFilterReset }) => {
  const [searchText, setSearchText] = useState([]);

  const searchRestaurants = () => {
    onSearch(searchText);
  };

  const filterTopRated = () => {
    onFilterTopRated();
  };

  const resetData = () => {
    onFilterReset();
  };

  return (
    <div className="filter flex flex-wrap justify-between">
    <div className="flex mb-2">
      <input
        className="border-y border-l border-green-400 h-full"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-green-400"
        type="button"
        onClick={searchRestaurants}
      >
        Search
      </button>
    </div>
    <div className="flex mb-2 gap-2">
      <button
        type="button"
        className="px-4 py-2 bg-green-400"
        onClick={filterTopRated}
      >
        Top Rated Restaurants
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-green-400"
        onClick={resetData}
      >
        Clear Filter
      </button>
    </div>
    </div>
  );
};

export default FilterRestaurants;

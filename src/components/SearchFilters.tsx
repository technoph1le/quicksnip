import { useCategories } from "../hooks/useCategories";
import { useAppContext } from "../contexts/AppContext";

const SearchFilters = () => {
  const { category, setCategory } = useAppContext();
  const { fetchedCategories } = useCategories();

  return (
    <div className="search-filters">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {fetchedCategories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilters;

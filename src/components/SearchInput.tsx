import { SearchIcon } from "./Icons";
import { useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query) {
        setSearchParams({ q: query });
        navigate(`/search?q=${encodeURIComponent(query.trim().toLowerCase())}`);
      } else {
        setSearchParams({});
        navigate("/");
      }
    }, 200),
    [setSearchParams, navigate]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="search-field">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        type="search"
        id="search"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search here..."
        autoComplete="off"
      />
    </div>
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default SearchInput;

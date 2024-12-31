import { SearchIcon } from "./Icons";
import { useState, useCallback } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");

  const navigateToSearch = useCallback(
    (query: string, isCompletedSearch = false) => {
      const trimmedQuery = query.trim().toLowerCase();

      if (!trimmedQuery) {
        // Remove search params and navigate to home if query is empty
        setSearchParams({});
        navigate("/", { replace: true });
        return;
      }

      // Set the search params with the query
      // Use replace: true for keypresses (when isCompletedSearch is false)
      setSearchParams({ q: trimmedQuery }, { replace: !isCompletedSearch });

      // Only navigate if we're not already on the search page
      if (location.pathname !== "/search") {
        navigate("/search", {
          replace: isCompletedSearch || location.pathname === "/search",
        });
      }
    },
    [navigate, location.pathname, setSearchParams]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigateToSearch(searchValue, true);
      }}
      className="search-field"
    >
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        type="search"
        id="search"
        value={searchValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setSearchValue(newValue);
          navigateToSearch(newValue, false);
        }}
        onBlur={() => navigateToSearch(searchValue, true)}
        placeholder="Search here..."
        autoComplete="off"
      />
    </form>
  );
};

export default SearchInput;

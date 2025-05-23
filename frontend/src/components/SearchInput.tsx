import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { QueryParams } from "@utils/enums";

import { SearchIcon } from "./Icons";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchText, setSearchText } = useAppContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchFieldClick = () => {
    inputRef.current?.focus();
  };

  const clearSearch = useCallback(() => {
    setSearchText("");
    searchParams.delete(QueryParams.SEARCH);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, setSearchText]);

  const performSearch = useCallback(() => {
    // Check if the input element is focused.
    if (document.activeElement !== inputRef.current) {
      return;
    }

    const formattedVal = searchText.toLowerCase();

    setSearchText(formattedVal);
    if (!formattedVal) {
      searchParams.delete(QueryParams.SEARCH);
      setSearchParams(searchParams);
    } else {
      searchParams.set(QueryParams.SEARCH, formattedVal);
      setSearchParams(searchParams);
    }
  }, [searchParams, searchText, setSearchParams, setSearchText]);

  /**
   * Focus the search input when the user presses the `/` key.
   */
  const handleSearchKeyPress = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  /**
   * Clear search text and blur the input when the `Escape` key is pressed.
   */
  const handleEscapeKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      // Check if the input element is focused.
      if (document.activeElement !== inputRef.current) {
        return;
      }

      inputRef.current?.blur();

      clearSearch();
    },
    [clearSearch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleSearchKeyPress);
    window.addEventListener("keyup", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleSearchKeyPress);
      window.removeEventListener("keyup", handleEscapeKeyPress);
    };
  }, [handleEscapeKeyPress]);

  /**
   * Update the search query in the URL when the search text changes.
   */
  useEffect(() => {
    performSearch();
  }, [searchText, performSearch]);

  /**
   * Set the search text to the search query from the URL on mount.
   */
  useEffect(() => {
    const searchQuery = searchParams.get(QueryParams.SEARCH);
    if (!searchQuery) {
      return;
    }

    setSearchText(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-field" onClick={handleSearchFieldClick}>
      <SearchIcon />
      <input
        ref={inputRef}
        value={searchText}
        type="search"
        id="search"
        autoComplete="off"
        onChange={(e) => {
          const newValue = e.target.value;
          if (!newValue) {
            clearSearch();
            return;
          }
          setSearchText(newValue);
        }}
      />
      {!searchText && (
        <label htmlFor="search">
          Type <kbd>/</kbd> to search
        </label>
      )}
    </div>
  );
};

export default SearchInput;

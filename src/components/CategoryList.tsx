import { useEffect } from "react";

import { useAppContext } from "@contexts/AppContext";
import { useCategories } from "@hooks/useCategories";

const CategoryList = () => {
  const { category, setCategory } = useAppContext();
  const { fetchedCategories, loading, error } = useCategories();

  useEffect(() => {
    setCategory(fetchedCategories[0]);
  }, [setCategory, fetchedCategories]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error occurred: {error}</div>;

  return (
    <ul role="list" className="categories">
      {fetchedCategories.map((name, idx) => (
        <li key={idx} className="category">
          <button
            className={`category__btn ${
              name === category ? "category__btn--active" : ""
            }`}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;

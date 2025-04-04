"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";
import { useCategories } from "@/hooks/useCategories";
import { defaultCategoryName } from "@/utils/consts";
import { slugify } from "@/utils/slugify";

interface CategoryListItemProps {
  name: string;
}

const CategoryListItem: FC<CategoryListItemProps> = ({ name }) => {
  const router = useRouter();

  const { selectedLanguage, selectedCategory } = useAppContext();

  const handleSelect = () => {
    router.push(
      `/${slugify(selectedLanguage.name)}/${slugify(
        selectedCategory.categoryName
      )}`
    );
  };

  return (
    <li className="category">
      <button
        className={`category__btn ${
          slugify(name) === slugify(selectedCategory.categoryName)
            ? "category__btn--active"
            : ""
        }`}
        onClick={handleSelect}
      >
        {name}
      </button>
    </li>
  );
};

const CategoryList: FC = () => {
  const { fetchedCategories, loading, error } = useCategories();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error}</div>;

  return (
    <ul role="list" className="categories">
      <CategoryListItem name={defaultCategoryName} />
      {fetchedCategories.map((name, idx) => (
        <CategoryListItem key={idx} name={name} />
      ))}
    </ul>
  );
};

export default CategoryList;

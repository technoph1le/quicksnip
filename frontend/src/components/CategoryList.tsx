import { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { useCategories } from "@hooks/useCategories";
import { configureUserSelection } from "@utils/configureUserSelection";
import { defaultCategoryName } from "@utils/consts";
import { slugify } from "@utils/slugify";

interface CategoryListItemProps {
  categoryName: string;
}

const CategoryListItem: FC<CategoryListItemProps> = ({ categoryName }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { language, subLanguage, category } = useAppContext();

  const handleSelect = async () => {
    const {
      language: newLanguage,
      subLanguage: newSubLanguage,
      category: newCategory,
    } = await configureUserSelection({
      languageName: language.name,
      subLanguageName: subLanguage || undefined,
      categoryName,
    });

    const navigatePath =
      newSubLanguage === null
        ? `/${slugify(newLanguage.name)}/s/${slugify(newCategory)}`
        : `/${slugify(newLanguage.name)}/${slugify(newSubLanguage)}/${slugify(newCategory)}`;

    navigate({
      pathname: navigatePath,
      search: searchParams.toString(),
    });
  };

  return (
    <li className="category">
      <button
        className={`category__btn ${
          slugify(categoryName) === slugify(category)
            ? "category__btn--active"
            : ""
        }`}
        onClick={handleSelect}
      >
        {categoryName}
      </button>
    </li>
  );
};

const CategoryList = () => {
  const { fetchedCategories, loading, error } = useCategories();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error occurred: {error}</div>;

  return (
    <ul role="list" className="categories">
      <CategoryListItem categoryName={defaultCategoryName} />
      {fetchedCategories.map((categoryName, idx) => (
        <CategoryListItem key={idx} categoryName={categoryName} />
      ))}
    </ul>
  );
};

export default CategoryList;

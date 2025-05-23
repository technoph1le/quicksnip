import { Navigate, Route, Routes } from "react-router-dom";

import App from "@components/App";
import SnippetList from "@components/SnippetList";
import {
  defaultCategoryName,
  defaultLanguage,
  defaultSlugifiedSubLanguageName,
} from "@utils/consts";
import { slugify } from "@utils/slugify";

const AppRouter = () => {
  const defaultURLPath = `/${slugify(defaultLanguage.name)}/${slugify(defaultSlugifiedSubLanguageName)}/${slugify(defaultCategoryName)}`;

  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<SnippetList />} />
        <Route path="/:languageName" element={<SnippetList />} />
        <Route
          path="/:languageName/:subLanguageName"
          element={<SnippetList />}
        />
        <Route
          path="/:languageName/:subLanguageName/:categoryName"
          element={<SnippetList />}
        />
        <Route path="*" element={<Navigate to={defaultURLPath} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

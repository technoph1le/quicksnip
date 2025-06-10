import { Route, Routes } from "react-router-dom";

import App from "@components/App";
import SnippetList from "@components/SnippetList";

const AppRouter = () => {
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
      </Route>
    </Routes>
  );
};

export default AppRouter;

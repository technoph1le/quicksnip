"use client";

import { createContext, FC, useContext, useState } from "react";
import { AppState, CategoryType, LanguageType, SnippetType } from "@/types";

const AppContext = createContext<AppState | null>(null);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [selectedSnippet, setSelectedSnippet] = useState<SnippetType | null>(
    null
  );

  const [searchText, setSearchText] = useState<string>("");

  return (
    <AppContext.Provider
      value={
        {
          selectedLanguage,
          setSelectedLanguage,
          selectedCategory,
          setSelectedCategory,
          selectedSnippet,
          setSelectedSnippet,
          searchText,
          setSearchText,
        } as AppState
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

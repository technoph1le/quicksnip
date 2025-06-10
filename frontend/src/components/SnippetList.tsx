import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { useSnippets } from "@hooks/useSnippets";
import { SnippetType } from "@types";
import { QueryParams } from "@utils/enums";
import {
  getLanguageDisplayLogo,
  getLanguageDisplayName,
} from "@utils/languageUtils";
import { slugify } from "@utils/slugify";

import SnippetModal from "./SnippetModal";

const SnippetList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchedSnippets, loading } = useSnippets();
  const { language, subLanguage, snippet, setSnippet } = useAppContext();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const shouldReduceMotion = useReducedMotion();

  const handleOpenModal = (selected: SnippetType) => () => {
    setIsModalOpen(true);
    setSnippet(selected);

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(QueryParams.SNIPPET, slugify(selected.title));
    setSearchParams(searchParams);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSnippet(null);

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(QueryParams.SNIPPET);
    setSearchParams(searchParams);
  };

  /**
   * open the relevant modal if the snippet is in the search params
   */
  const snippetSlug = searchParams.get(QueryParams.SNIPPET);

  useEffect(() => {
    if (!snippetSlug) return;

    const selectedSnippet = (fetchedSnippets ?? []).find(
      (item) => slugify(item.title) === snippetSlug
    );

    if (selectedSnippet) {
      handleOpenModal(selectedSnippet)();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedSnippets, searchParams]);

  if (loading) return null;

  return (
    <>
      <motion.ul
        role="list"
        className={`snippets ${fetchedSnippets && fetchedSnippets.length === 0 ? "data-empty" : ""}`}
      >
        <AnimatePresence mode="popLayout">
          {fetchedSnippets && fetchedSnippets.length === 0 && (
            <div className="category-no-snippets-found">
              <p>No snippets found for this category. Why not add one? 🚀</p>
              <a
                href="https://github.com/technoph1le/quicksnip/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Add your own snippet
              </a>
            </div>
          )}

          {fetchedSnippets.map((snippet, idx) => {
            const uniqueId = `${language.name}-${snippet.title}-${idx}`;
            return (
              <motion.li
                key={uniqueId}
                layoutId={uniqueId}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: shouldReduceMotion ? 0 : 0.2,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: {
                    duration: shouldReduceMotion ? 0 : 0.09,
                  },
                }}
                transition={{
                  ease: [0, 0.75, 0.25, 1],
                  duration: shouldReduceMotion ? 0 : 0.25,
                }}
              >
                <motion.button
                  className="snippet | flow"
                  data-flow-space="sm"
                  onClick={handleOpenModal(snippet)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="snippet__preview">
                    <img
                      src={getLanguageDisplayLogo(language.name, subLanguage)}
                      alt={getLanguageDisplayName(language.name, subLanguage)}
                    />
                  </div>
                  <h3 className="snippet__title">{snippet.title}</h3>
                </motion.button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence mode="wait">
        {isModalOpen && snippet && (
          <SnippetModal
            snippet={snippet}
            handleCloseModal={handleCloseModal}
            extension={snippet.extension}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SnippetList;

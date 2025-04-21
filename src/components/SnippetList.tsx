"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useAppContext } from "@/contexts/AppContext";
import { useSnippets } from "@/hooks/useSnippets";
import { SnippetType } from "@/types";
import { QueryParams } from "@/utils/enums";
import { slugify } from "@/utils/slugify";
import { useRouter } from "next/navigation";

import SnippetModal from "./SnippetModal";

const SnippetList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { fetchedSnippets, loading } = useSnippets();
  const {
    selectedLanguage,
    selectedCategory,
    selectedSnippet,
    setSelectedSnippet,
  } = useAppContext();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const shouldReduceMotion = useReducedMotion();

  const handleOpenModal = (selected: SnippetType) => () => {
    setIsModalOpen(true);
    setSelectedSnippet(selected);

    const params = new URLSearchParams(searchParams.toString());
    params.set(QueryParams.SNIPPET, slugify(selected.title));

    router.push(`?${params.toString()}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSnippet(null);

    const params = new URLSearchParams(searchParams.toString());
    params.delete(QueryParams.SNIPPET);

    router.push(`?${params.toString()}`);
  };

  /**
   * open the relevant modal if the snippet is in the search params
   */
  useEffect(() => {
    const snippetSlug = searchParams.get(QueryParams.SNIPPET);
    if (!snippetSlug || !fetchedSnippets?.length) return;

    const matchedSnippet = (fetchedSnippets as SnippetType[]).find(
      (snippet) => slugify(snippet.title) === snippetSlug
    );

    if (matchedSnippet) {
      handleOpenModal(matchedSnippet)();
    }
  }, [fetchedSnippets, searchParams]);

  if (loading || !fetchedSnippets) return null;

  return (
    <>
      <motion.ul
        role="list"
        className={`snippets ${
          fetchedSnippets && fetchedSnippets.length === 0 ? "data-empty" : ""
        }`}
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

          {fetchedSnippets &&
            fetchedSnippets.map((snippet) => {
              if (!snippet) return null; // safety fallback
              const uniqueId = `${selectedLanguage.name}-${snippet.title}`;
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
                        src={selectedLanguage.icon}
                        alt={selectedLanguage.name}
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
        {isModalOpen && selectedSnippet && (
          <SnippetModal
            snippet={selectedSnippet}
            handleCloseModal={handleCloseModal}
            extension={selectedSnippet.extension}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SnippetList;

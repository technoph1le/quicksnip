import { useState, useMemo } from "react";
import { SnippetType } from "../types";
import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";
import SnippetModal from "./SnippetModal";

const SearchSnippetList = ({ query }: { query: string | null }) => {
  const { language, snippet, setSnippet } = useAppContext();
  const { fetchedSnippets, loading } = useSnippets();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSnippets = useMemo(() => {
    if (!query) return [];
    return fetchedSnippets.filter((snippet) =>
      snippet.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [fetchedSnippets, query]);

  const handleOpenModal = (activeSnippet: SnippetType) => {
    setIsModalOpen(true);
    setSnippet(activeSnippet);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSnippet(null);
  };

  if (loading) return <div>Searching...</div>;
  if (filteredSnippets.length === 0)
    return <div>No results found for "{query}"</div>;

  return (
    <>
      <ul role="list" className="snippets">
        {filteredSnippets.map((snippet, idx) => (
          <li key={idx}>
            <button
              className="snippet | flow"
              data-flow-space="sm"
              onClick={() => handleOpenModal(snippet)}
            >
              <div className="snippet__preview">
                <img src={language.icon} alt={language.lang} />
              </div>
              <h3 className="snippet__title">{snippet.title}</h3>
              <p className="snippet__description">{snippet.description}</p>
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && snippet && (
        <SnippetModal
          snippet={snippet}
          handleCloseModal={handleCloseModal}
          language={language.lang}
        />
      )}
    </>
  );
};

export default SearchSnippetList;

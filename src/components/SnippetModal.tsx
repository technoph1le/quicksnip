import { motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

import { useEscapeKey } from "@hooks/useEscapeKey";
import { SnippetType } from "@types";
import { slugify } from "@utils/slugify";

import Button from "./Button";
import CodePreview from "./CodePreview";
import { CloseIcon } from "./Icons";

type Props = {
  snippet: SnippetType;
  language: string;
  handleCloseModal: () => void;
};

const SnippetModal: React.FC<Props> = ({
  snippet,
  language,
  handleCloseModal,
}) => {
  const modalRoot = document.getElementById("modal-root");

  useEscapeKey(handleCloseModal);

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <motion.div
      key="modal-overlay"
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseModal();
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        key="modal-content"
        className="modal | flow"
        data-flow-space="lg"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <div className="modal__header">
          <h2 className="section-title">{snippet.title}</h2>
          <Button isIcon={true} onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </div>
        <CodePreview language={slugify(language)} code={snippet.code} />
        <p>
          <b>Description: </b>
          {snippet.description}
        </p>
        <p>
          Contributed by{" "}
          <a
            href={`https://github.com/${snippet.author}`}
            target="_blank"
            rel="noopener noreferrer"
            className="styled-link"
          >
            @{snippet.author}
          </a>
        </p>
        <ul role="list" className="modal__tags">
          {snippet.tags.map((tag) => (
            <li key={tag} className="modal__tag">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default SnippetModal;

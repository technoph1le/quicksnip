import { motion, useReducedMotion } from "motion/react";
import React from "react";
import ReactDOM from "react-dom";

import { useAppContext } from "@contexts/AppContext";
import { useEscapeKey } from "@hooks/useEscapeKey";
import { SnippetType } from "@types";

import Button from "./Button";
import CodePreview from "./CodePreview";
import { CloseIcon } from "./Icons";

type Props = {
  snippet: SnippetType;
  extension: string;
  handleCloseModal: () => void;
};

const SnippetModal: React.FC<Props> = ({
  snippet,
  extension,
  handleCloseModal,
}) => {
  const modalRoot = document.getElementById("modal-root");

  const { language, subLanguage } = useAppContext();
  const shouldReduceMotion = useReducedMotion();

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
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
    >
      <motion.div
        key="modal-content"
        className="modal | flow"
        data-flow-space="lg"
        layoutId={`${extension}-${snippet.title}`}
        transition={{
          ease: [0, 0.75, 0.25, 1],
          duration: shouldReduceMotion ? 0 : 0.3,
        }}
      >
        <div className="modal__header">
          <h2 className="section-title">{snippet.title}</h2>
          <Button isIcon={true} onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </div>
        <div className="modal__body | flow">
          {/* TODO: update the language name and remove all-sub-languages */}
          <CodePreview
            languageName={subLanguage === null ? language.name : subLanguage}
            extension={extension}
            code={snippet.code}
          />
          <p>
            <b>Description: </b>
            {snippet.description}
          </p>
          <p>
            Created by{" "}
            <a
              href={`https://github.com/${snippet.author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              @{snippet.author}
            </a>
          </p>
          {(snippet.contributors ?? []).length > 0 && (
            <div className="contributors">
              <span>Contributors: </span>
              {snippet.contributors
                ?.slice(0, 3)
                .map((contributor, index, slicedArray) => (
                  <>
                    <a
                      key={contributor}
                      href={`https://github.com/${contributor}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="styled-link"
                    >
                      @{contributor}
                    </a>
                    {index < slicedArray.length - 1 && ", "}
                  </>
                ))}
              {(snippet.contributors?.length ?? 0) > 3 && (
                <span> & {snippet.contributors!.length - 3} more</span>
              )}
            </div>
          )}
          <ul role="list" className="modal__tags">
            {snippet.tags.map((tag) => (
              <li key={tag} className="modal__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default SnippetModal;

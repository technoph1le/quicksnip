import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { CloseIcon } from "./Icons";
import CodePreview from "./CodePreview";
import { SnippetType } from "../types";
import slugify from "../utils/slugify";
import useEscapeKey from "../hooks/useEscapeKey";

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
  if (!modalRoot) return null;
  useEscapeKey(handleCloseModal);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal | flow" data-flow-space="lg">
        <div className="modal__header">
          <h2 className="section-title">{snippet.title}</h2>
          <Button isIcon={true} onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </div>
        <CodePreview
          language={slugify(language)}
          code={snippet.code}
          title={snippet.title}
        />
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
      </div>
    </div>,
    modalRoot
  );
};

export default SnippetModal;

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";
import Button from "./Button";
import { ImageDownloadIcon } from "./Icons";
import { useState } from "react";
import ImageExportModal from "./ImageExportModal";

type Props = {
  language: string;
  title: string;
  code: string[];
};

const CodePreview = ({ language = "markdown", code, title }: Props) => {
  const codeString = code.join("\n");

  const [imageExportModalActive, setImageExportModalActive] = useState(false);

  return (
    <div className="code-preview">
      <div className="code_preview_modal">
        <CopyToClipboard text={codeString} className="modal__copy" />
        <Button
          onClick={() => setImageExportModalActive(true)}
          className="modal__export"
          isIcon={true}
        >
          <ImageDownloadIcon />
        </Button>
      </div>
      {imageExportModalActive && (
        <ImageExportModal
          language={language}
          style={oneDark}
          code={codeString}
          handleCloseModal={() => setImageExportModalActive(false)}
          title={title}
        />
      )}

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        customStyle={{ margin: "0", maxHeight: "20rem" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;

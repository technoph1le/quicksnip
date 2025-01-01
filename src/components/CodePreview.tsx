import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { useAppContext } from "@contexts/AppContext";

import CopyToClipboard from "./CopyToClipboard";

type Props = {
  language: string;
  code: string[];
};

const CodePreview = ({ language = "markdown", code }: Props) => {
  const { highlighterStyle } = useAppContext();

  return (
    <div className="code-preview">
      <CopyToClipboard text={code.join("\n")} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={highlighterStyle.style}
        wrapLines={true}
        customStyle={{
          margin: "0",
          maxHeight: "20rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          padding: "1rem",
        }}
      >
        {code.join("\n")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;

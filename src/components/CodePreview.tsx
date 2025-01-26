import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import CopyToClipboard from "./CopyToClipboard";

type Props = {
  language: string;
  code: string;
};

const CodePreview = ({ language = "markdown", code }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">(
    (document.documentElement.getAttribute("data-theme") as "dark" | "light") ||
      "dark"
  );

  const handleThemeChange = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-theme") {
        const newTheme = document.documentElement.getAttribute(
          "data-theme"
        ) as "dark" | "light";
        setTheme(newTheme || "dark");
      }
    });
  };

  const observer = new MutationObserver(handleThemeChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return (
    <div className="code-preview">
      <CopyToClipboard text={code} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        wrapLines={true}
        customStyle={{ margin: "0", maxHeight: "32rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;

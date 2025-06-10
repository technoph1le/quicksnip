import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { slugify } from "@utils/slugify";

import CopyToClipboard from "./CopyToClipboard";
import CopyURLButton from "./CopyURLButton";

type Props = {
  extension: string;
  languageName: string;
  code: string;
};

const CodePreview = ({ extension = "markdown", languageName, code }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute("data-theme") as
        | "dark"
        | "light";
      setTheme(newTheme || "dark");
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="code-preview">
      <div className="code-preview__header">
        <p>{languageName ? slugify(languageName) : ""}</p>
        <div className="code-preview__buttons">
          <CopyToClipboard text={code} />
          <CopyURLButton />
        </div>
      </div>
      <div className="code-preview__body">
        <SyntaxHighlighter
          language={extension}
          style={theme === "dark" ? oneDark : oneLight}
          wrapLines={true}
          customStyle={{ margin: "0", maxHeight: "22rem" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodePreview;

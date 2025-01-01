import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";
import { useEffect, useState } from "react";

type Props = {
  language: string;
  code: string;
};

const CodePreview = ({ language = "markdown", code }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light";
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
      <CopyToClipboard text={code} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        wrapLines={true}
        customStyle={{ margin: "0", maxHeight: "20rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;

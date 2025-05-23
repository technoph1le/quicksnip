import { useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "./Button";
import { ShareIcon } from "./Icons";

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CopyURLButton = ({ ...props }: Props) => {
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const copyText = () => {
    const fullURL =
      window.location.origin + location.pathname + location.search;
    navigator.clipboard
      .writeText(fullURL)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => alert("Error occurred: " + err));
  };

  return (
    <Button isIcon={true} onClick={copyText} {...props}>
      <ShareIcon />
      <span>{isCopied ? "Shared!" : "Share"}</span>
    </Button>
  );
};

export default CopyURLButton;

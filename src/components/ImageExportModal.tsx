import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { downloadFile } from "../utils/downloadFile";
import nodeToImage from "dom-to-image";

type Props = {
  handleCloseModal: () => void;
  code: string;
  language: string;
  style: { [key: string]: React.CSSProperties };
  title: string;
};

const ImageExportModal: React.FC<Props> = ({
  code,
  handleCloseModal,
  language,
  style,
  title,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const exportImage = async () => {
    const node = imageRef.current;
    if (!node) {
      console.error("Image node not found");
      return;
    }

    const scale = 3;

    try {
      const image = await nodeToImage.toPng(node, {
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        },
      });

      downloadFile(image, title);
      handleCloseModal();
    } catch (error) {
      console.error("Error exporting image:", error);
    }
  };

  useEffect(() => {
    if (!isExporting) {
      setIsExporting(true);
      exportImage();
    }
    // Only runs once on mount due to empty dependency array
  }, [isExporting]);

  return (
    <div className="modal-overlay export_image_modal z-50">
      <div
        className="modal | flow"
        data-flow-space="lg"
        style={{
          position: "relative",
          minWidth: "45rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Exporting Image
          </p>
        </div>
        <div
          ref={imageRef}
          style={{
            padding: 20,
            background: "#2A2A2A",
            overflowY: "auto",
          }}
        >
          <SyntaxHighlighter
            language={language}
            style={style}
            wrapLines={true}
            wrapLongLines
            customStyle={{
              margin: "0",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              overflowY: "visible",
              border: "1px solid var(--border-color)",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ImageExportModal;

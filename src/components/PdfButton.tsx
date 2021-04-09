// React Imports
import { MouseEvent } from "react";
// Ant Design Imports
import { Button } from "antd";
// Ant Design Icons
import { FilePdfOutlined } from "@ant-design/icons";

/**
 * PdfButton
 *
 * PDF Button for Video Card
 */
export const PdfButton: React.FC<{ pdf: any }> = ({
  pdf,
}): JSX.Element | null => {
  // Stops video modal from opening
  const handleClick = (e: MouseEvent) => e.stopPropagation();

  return !!pdf ? (
    <Button
      block
      size="small"
      type="primary"
      className="pdf-button"
      onClick={handleClick}
    >
      <a className="pdf" target="_blank" rel="noopener noreferrer" href={pdf}>
        {"Download PDF "}
        <FilePdfOutlined />
      </a>
    </Button>
  ) : null;
};

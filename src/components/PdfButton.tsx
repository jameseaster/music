// React Imports
import { MouseEvent } from "react";
// Ant Design Imports
import { Button, Typography } from "antd";
// Constants
const { Text } = Typography;

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
      size="small"
      type="primary"
      onClick={handleClick}
      className="pdf-button"
    >
      <a className="pdf-a" href={pdf} target="_blank" rel="noopener noreferrer">
        <Text className="pdf-btn-text">P</Text>
        <Text className="pdf-btn-text">D</Text>
        <Text className="pdf-btn-text">F</Text>
      </a>
    </Button>
  ) : null;
};

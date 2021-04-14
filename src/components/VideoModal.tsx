import ReactPlayer from "react-player";
import { Modal } from "antd";
import { useCurrentBreakpoint } from "../hooks";

/**
 * VideoModal
 *
 * Modal for ReactPlayer compenent
 */
export const VideoModal: React.FC<{
  url: string;
  visible: boolean;
  onCancel: () => void;
}> = ({ url, visible, onCancel }): JSX.Element => {
  // Hooks
  const { breakpoint } = useCurrentBreakpoint();

  // Widths for divider at the top of the Pages
  type Dimensions = {
    [key: string]: {
      height: string;
      width: number;
    };
  };
  const dimensions: Dimensions = {
    xs: { width: 360, height: "203px" },
    sm: { width: 570, height: "321px" },
    md: { width: 700, height: "394px" },
    lg: { width: 850, height: "478px" },
    xl: { width: 900, height: "506px" },
    xxl: { width: 900, height: "506px" },
  };

  return (
    <div className="modal-container">
      <Modal
        centered
        footer={null}
        destroyOnClose
        closable={false}
        visible={visible}
        onCancel={onCancel}
        width={dimensions[breakpoint]?.width}
        bodyStyle={{
          padding: "0px",
          height: dimensions[breakpoint]?.height,
        }}
      >
        <ReactPlayer
          controls
          url={url}
          stopOnUnmount
          width={dimensions[breakpoint]?.width || "100%"}
          height={dimensions[breakpoint]?.height || "100%"}
        />
      </Modal>
    </div>
  );
};

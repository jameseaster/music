// React Imports
import { useState } from "react";
// Ant Design Imports
import { Typography } from "antd";
// Components
import { PdfButton } from "./PdfButton";
import { VideoModal } from "./VideoModal";
// Constants
const { Title, Text } = Typography;
// Types
type Video = {
  pdf?: any;
  id: string;
  url: string;
  image: string;
  title: string;
  pdf_title?: string;
  sub_title?: string;
};

/**
 * VideoCard
 *
 * A clickable card that displays a video image, title, subtitle,
 * and pdf (if available). User can click on the card to play the
 * video or on the pdf button to open the pdf in a new tab.
 */
export const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  // Local State
  const [openModal, setOpenModal] = useState(false);
  // Constants
  const { title, sub_title, image, pdf, url } = video;
  // Opens and closes VideoModal
  const handleClick = () => setOpenModal(true);
  // Closes VideoModal
  const onCancel = () => setOpenModal(false);

  return (
    <>
      <div className="new-video-card" onClick={handleClick}>
        <img alt="video" src={image} />
        <Title level={3} className="img-title">
          {title}
        </Title>
        <Text type="secondary" className="img-subtitle">
          {sub_title}
        </Text>
        <PdfButton pdf={pdf} />
      </div>
      <VideoModal url={url} visible={openModal} onCancel={onCancel} />
    </>
  );
};

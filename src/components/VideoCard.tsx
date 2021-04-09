// React Imports
import { useState } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Card, Typography } from "antd";
// Ant Design Icons
import { CaretRightOutlined } from "@ant-design/icons";
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
      <div className="video-card-container fade-in">
        <Card className={clsx({ "no-pdf-height": !pdf })} onClick={handleClick}>
          <div className="img-container">
            <img alt="example" src={image} />
            <CaretRightOutlined className="play-icon" />
          </div>
          <div className={clsx("card-body", { "no-pdf-margin": !pdf })}>
            <Title level={5}>{title}</Title>
            <Text type="secondary">{sub_title}</Text>
            <PdfButton pdf={pdf} />
          </div>
        </Card>
      </div>
      <VideoModal url={url} visible={openModal} onCancel={onCancel} />
    </>
  );
};

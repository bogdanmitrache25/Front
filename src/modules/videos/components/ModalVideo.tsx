import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Video } from "../video";
import { ModalContainer } from "./ModalVideo.styles";
import pussy from "../../../assets/pussy-icon.png";
import penis from "../../../assets/penis-icon.png";

const modalSettings = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalVideo = ({ video }: { video: Video | undefined }) => {
  if (!video) return null;

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (video) {
      openModal();
    }
  }, [video]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalSettings}
    >
      <ModalContainer.Content>
        <ModalContainer.CloseButton onClick={closeModal}>
          x
        </ModalContainer.CloseButton>
        <ModalContainer.Title>{video.title}</ModalContainer.Title>
        <dl8-video title={video.title} format="STEREO_360_LR">
          <source src={video.trailer} type="video/mp4" />
        </dl8-video>
        {/* <ModalContainer.VideoContainer controls autoPlay>
          <source src={video.trailer} type="video/mp4" />
          Tu navegador no soporta los vídeos de HTML5
        </ModalContainer.VideoContainer> */}
        <ModalContainer.TagContainer>
          {Object.values(video.video_tags).map((tag) => (
            <ModalContainer.Tag>#{tag}</ModalContainer.Tag>
          ))}
        </ModalContainer.TagContainer>

        <ModalContainer.PerformersContainer>
          <ModalContainer.Performers>
            <img src={pussy} width="24" />
            {Object.values(video.performers_names.female).map(
              (name, index, array) => (
                <span key={name}>
                  {name}
                  {index !== array.length - 1 && ","}
                </span>
              )
            )}
          </ModalContainer.Performers>

          <ModalContainer.Performers>
            <img src={penis} height="24" />
            {Object.values(video.performers_names.male).map((name) => (
              <span key={name}>{name}</span>
            ))}
          </ModalContainer.Performers>
        </ModalContainer.PerformersContainer>
      </ModalContainer.Content>
    </Modal>
  );
};

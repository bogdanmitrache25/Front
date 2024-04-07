import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 30px;
  color: black;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VideoContainer = styled.video`
  width: 720;
  height: 450;
  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  gap: 10px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 0px;
    box-sizing: border-box;
  }
`;

const Tag = styled.h3`
  padding: 0px 5px;
  margin: 5px;
  color: #2b2b2b;
  border-radius: 10px;
  border: 1px solid #cacaca;
  background-color: #cacaca;
`;

const Performers = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 500;
  flex-wrap: wrap;
  align-items: center;
`;

const PerformersContainer = styled.div`
  display: flex;
  margin: 5px;
  gap: 10px;
`;

export const ModalContainer = {
  Title,
  TagContainer,
  PerformersContainer,
  Content,
  CloseButton,
  VideoContainer,
  Performers,
  Tag,
};

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 20px;
`;

const VideoSearcherContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const VideoSearcher = styled.input`
  width: 30%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: #494949;
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px;

  cursor: pointer;

  > img {
    transition: transform 0.3s ease;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #494949;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardDescription = styled.span`
  font-size: 16px;
  color: #494949;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const UserMessage = styled.p`
  color: #494949;
  margin: 0px;
`;

export const VideosPageStyle = {
  Container,
  VideoContainer,
  VideoSearcher,
  UserMessage,
  VideoSearcherContainer,
  Title,
  Card,
  CardImage,
  CardDescription,
  CardTitle,
};

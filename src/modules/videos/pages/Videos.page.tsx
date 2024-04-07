import { ChangeEvent, useEffect, useState } from "react";
import { useVideosPage } from "../hooks/useVideosPage";
import { VideosPageStyle } from "./Videos.page.styles";
import { ModalVideo } from "../components/ModalVideo";
import { Video } from "../video";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { Pagination } from "../../shared/components/Pagination";

type SelectedVideoId = Video | undefined;
const DELAY_INPUT_SEARCH_IN_MS = 300;

export const VideosPage = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<SelectedVideoId>();
  const [query, setQuery] = useState("");
  const { videos, searchVideos, pageInfo, isLoading } = useVideosPage();
  const queryDebounced = useDebounce(query, DELAY_INPUT_SEARCH_IN_MS);

  useEffect(() => {
    console.warn({ queryDebounced });
    searchVideos({ query: queryDebounced });
  }, [queryDebounced]);

  const handleVideo = (video: Video) => {
    setSelectedVideoId(video);
  };

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value as string);
  };

  const handleChangePage = ({ selected }: { selected: number }) => {
    searchVideos({ query: queryDebounced.trim(), page: selected });
  };

  return (
    <VideosPageStyle.Container>
      <VideosPageStyle.VideoSearcherContainer>
        <VideosPageStyle.VideoSearcher
          placeholder="Buscar..."
          onChange={handleSearch}
          value={query}
        />
      </VideosPageStyle.VideoSearcherContainer>
      {isLoading && (
        <VideosPageStyle.UserMessage>Loading...</VideosPageStyle.UserMessage>
      )}

      {!isLoading && videos.length === 0 && (
        <VideosPageStyle.UserMessage>No results...</VideosPageStyle.UserMessage>
      )}
      <VideosPageStyle.VideoContainer>
        {videos.map((video) => {
          return (
            <VideosPageStyle.Card
              key={video.id}
              onClick={() => handleVideo(video)}
            >
              <VideosPageStyle.CardImage
                src={video.poster}
                alt={video.short_description}
              />
              <VideosPageStyle.CardTitle>
                {video.title}
              </VideosPageStyle.CardTitle>
              <VideosPageStyle.CardDescription>
                {video.short_description}
              </VideosPageStyle.CardDescription>
            </VideosPageStyle.Card>
          );
        })}
      </VideosPageStyle.VideoContainer>
      <ModalVideo video={selectedVideoId} />
      <Pagination onPageChange={handleChangePage} pageInfo={pageInfo} />
    </VideosPageStyle.Container>
  );
};

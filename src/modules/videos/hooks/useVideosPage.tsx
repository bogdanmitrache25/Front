import { useEffect, useState } from "react";
import {
  VideosParams,
  VideosRepository,
} from "../repository/videosRepoository";
import { Video } from "../video";

export const useVideosPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageInfo, setpageInfo] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 1,
    total_videos: 0,
  });

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async (params?: VideosParams) => {
    setIsLoading(true);
    const result = await VideosRepository.getVideos(params);
    setVideos(result.videos);

    const { current_page, last_page, per_page, total_videos } = result;

    setpageInfo({
      current_page: Number(current_page),
      last_page: Number(last_page),
      per_page: Number(per_page),
      total_videos: Number(total_videos),
    });
    setIsLoading(false);
  };

  return {
    videos,
    pageInfo,
    isLoading,
    searchVideos: getVideos,
  };
};

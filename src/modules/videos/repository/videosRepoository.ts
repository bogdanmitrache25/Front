import axios from "axios";
import { xmlToJson } from "../../shared/xmlToJson";
import { VideoResponse } from "../video";

const URL = import.meta.env.VITE_BASE_URL;

export interface VideosParams {
  page?: number;
  query?: string;
}

const getVideos = async ({ page, query }: VideosParams = {}) => {
  const params = {
    page,
    query,
  };

  try {
    const response = await axios.get(URL, {
      params,
    });
    const jsonData = xmlToJson(response.data as unknown as string) as {
      result: VideoResponse;
    };
    const videoResponse = jsonData.result as VideoResponse;
    return {
      ...videoResponse,
      videos: videoResponse.videos || [],
    };
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const VideosRepository = {
  getVideos,
};

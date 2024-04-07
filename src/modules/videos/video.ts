export interface VideoResponse {
  videos: Video[];
  total_videos: string;
  current_page: string;
  last_page: string;
  per_page: string;
}

export interface Video {
  pictures: Pictures;
  performers_names: Performersnames;
  video_tags: Videotags;
  id: string;
  title: string;
  video_string: string;
  url: string;
  trailer: string;
  video_angle: string;
  max_image_quality: string;
  running_time: string;
  release_date: string;
  short_description: string;
  poster: string;
}

interface Videotags {
  n0: string;
  n1: string;
  n2: string;
  n3?: string;
  n4?: string;
  n5?: string;
  n6?: string;
  n7?: string;
  n8?: string;
  n9?: string;
}

interface Performersnames {
  male: Male;
  female: Female;
}

interface Female {
  n0: string;
  n1?: string;
}

interface Male {
  n0: string;
}

interface Pictures {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5?: string;
  image6?: string;
  image7?: string;
}

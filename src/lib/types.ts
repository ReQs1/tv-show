export type MovieType = {
  adult: boolean;
  background_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ShowType = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MainType = {
  adult: boolean;
  backdrop_path: string;
  genres: GenreType[];
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
};

export type MovieDetails = MainType & {
  belongs_to_collection: null;
  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
};

export type ShowDetails = MainType & {
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  };
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: string;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  type: string;
};

export type MovieDetailsPageType = MovieDetails & {
  images: {
    backdrops: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
    logos: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
    posters: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
  };
  videos: {
    results: {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      official: boolean;
      published_at: string;
      site: string;
      size: number;
      type: string;
    }[];
  };
  credits: {
    cast: CastType[];
  };
  "watch/providers": {
    results: {
      GB: {
        buy: {
          display_priority: number;
          logo_path: string;
          provider_id: number;
          provider_name: string;
        };
        link: string;
        rent: {
          display_priority: number;
          logo_path: string;
          provider_id: number;
          provider_name: string;
        };
      };
    };
  };
  reviews: {
    page: number;
    results: {
      author: string;
      author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
      };
      content: string;
      created_at: string;
      id: string;
      updated_at: string;
      url: string;
    }[];
    total_pages: number;
    total_results: number;
  };
};

export type ShowDetailsPageType = ShowDetails & {
  images: {
    backdrops: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
    logos: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
    posters: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      iso_639_1: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
  };
  videos: {
    results: {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      official: boolean;
      published_at: string;
      site: string;
      size: number;
      type: string;
    }[];
  };
  credits: {
    cast: CastType[];
  };
  "watch/providers": {
    results: {
      GB: {
        buy: {
          display_priority: number;
          logo_path: string;
          provider_id: number;
          provider_name: string;
        };
        link: string;
        rent: {
          display_priority: number;
          logo_path: string;
          provider_id: number;
          provider_name: string;
        };
      };
    };
  };
  reviews: {
    page: number;
    results: {
      author: string;
      author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
      };
      content: string;
      created_at: string;
      id: string;
      updated_at: string;
      url: string;
    }[];
    total_pages: number;
    total_results: number;
  };
  "season/1": {
    air_date: string;
    episodes: EpisodeType[];
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  };
};

export type CastType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type SeasonType = {
  air_date: string;
  episodes: {
    air_date: string;
    crew: any[];
    episode_number: number;
    episode_type: string;
    guest_stars: any[];
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
  _id: number;
};

export type EpisodeType = {
  air_date: string;
  crew: any[];
  episode_number: number;
  episode_type: string;
  guest_stars: any[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
};

export type SimilarType = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type GenreType = {
  id: number;
  name: string;
  type?: string;
};

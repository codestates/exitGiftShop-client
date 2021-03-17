import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "305e9066d864a350fceea352c2f4ffe2",
    language: "ko-KR",
  },
});

// !!export const tvApi = {
// !!  nowPlaying: () => api.get("movie/now_playing"),
// !! upComing: () => api.get("movie/upcoming"),
// !!};

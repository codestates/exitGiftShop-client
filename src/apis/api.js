import axios from "axios";

const port = 4000;

export default axios.create({
  baseURL: `https://back.exitgift.shop:${port}/`,
  // params: {
  //  api_key: "305e9066d864a350fceea352c2f4ffe2",
  //  language: "ko-KR",
  // },
});


// !!export const tvApi = {
// !!  nowPlaying: () => api.get("movie/now_playing"),
// !! upComing: () => api.get("movie/upcoming"),
// !!};

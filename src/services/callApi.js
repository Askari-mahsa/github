import axios from "axios";

export const callApi = (params) => {
  let baseURL = "https://api.github.com/search/users?q=" + params;

  return axios.get(baseURL);
};
export const getProfileDetailService = (params) => {
  let baseURL =
    "https://api.github.com/users/" +
    params +
    "?client_id=undefined&client_secret=undefined";

  return axios.get(baseURL);
};

export const callUrl = (userName) => {
  let baseURL = `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`;

  return axios.get(baseURL);
};
export const callInfo = (userName) => {
  let baseUrl = `https://api.github.com/users/${userName}?client_id=undefined&client_secret=undefined`;
  return axios.get(baseUrl);
};

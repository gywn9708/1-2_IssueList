import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  // timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export const getIssueList = async () => {
  const res = await instance.get(`/repos/angular/angular-cli/issues`);

  return res.data;
};

export const getIssue = async (number) => {
  const res = await instance.get(`/repos/angular/angular-cli/issues/${number}`);

  return res.data;
};

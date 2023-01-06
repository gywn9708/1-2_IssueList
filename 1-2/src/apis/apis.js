import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (process.env.REACT_APP_TOKEN)
      newConfig.headers.Authorization = `token ${process.env.REACT_APP_TOKEN}`;

    return newConfig;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export const getIssueList = async (page) => {
  const res = await instance.get(
    `/repos/angular/angular-cli/issues?state=open&sort=comments&per_page=20&page=${page}`
  );

  return res.data;
};

export const getIssue = async (number) => {
  const res = await instance.get(`/repos/angular/angular-cli/issues/${number}`);

  return res.data;
};

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, createContext, useCallback } from "react";
import { getIssueList } from "../apis/apis";

export const ListContext = createContext({
  issueList: [],
  isLoading: true,
  isError: false,
  isEndData: false,
  handleNextPage: () => {},
});

export const ListContextProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndData, setIsEndData] = useState(false);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleIssueList = useCallback(() => {
    setIsLoading(true);
    getIssueList(page)
      .then((res) => {
        console.log("res", res);
        setIssueList((prev) => [...prev, ...res]);
        setIsLoading(false);
        if (res.length === 0) setIsEndData(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [page]);

  return (
    <ListContext.Provider
      value={{
        issueList,
        setIssueList,
        isLoading,
        isError,
        isEndData,
        handleNextPage,
        handleIssueList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

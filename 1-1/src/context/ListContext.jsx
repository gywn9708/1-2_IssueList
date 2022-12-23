/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, createContext, useCallback, useEffect } from "react";
import { getIssue, getIssueList } from "../api";

export const ListContext = createContext({
  issueList: [],
  issue: [],
});

export const ListContextProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);

  const handleIssueList = useCallback(() => {
    getIssueList()
      .then((res) => {
        console.log(res);
        setIssueList(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ListContext.Provider value={{ issueList, handleIssueList }}>
      {children}
    </ListContext.Provider>
  );
};

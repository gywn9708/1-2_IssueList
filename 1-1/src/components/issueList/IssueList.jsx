/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
import React, { useContext, useEffect } from "react";
import { ListContext } from "../../context/ListContext";
import IssueItem from "../issueItem/IssueItem";

const IssueList = () => {
  const { issueList, handleIssueList } = useContext(ListContext);

  useEffect(() => {
    handleIssueList();
  }, [handleIssueList]);

  console.log("봐봐", issueList);
  return (
    <div>
      {issueList.map((data, index) => (
        <IssueItem
          title={data.title}
          number={data.number}
          writer={data.user.login}
          created={data.created_at}
          comments={data.comments}
          isAdvertisement={index === 3}
        />
      ))}
    </div>
  );
};

export default IssueList;

/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
import React, { useContext, useEffect } from "react";
import { ListContext } from "../../contexts/ListContext";
import IssueItem from "../issueItem/IssueItem";
import Error from "../error/Error";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import S from "./styles";
import Header from "../header/Header";

const IssueList = () => {
  const {
    issueList,
    isLoading,
    isError,
    isEndData,
    handleNextPage,
    handleIssueList,
  } = useContext(ListContext);

  const { obsRef } = useInfinityScroll(isLoading, isEndData, handleNextPage);

  useEffect(() => {
    handleIssueList();
  }, [handleIssueList]);

  console.log("봐봐", issueList);

  if (isError) return <Error />;
  return (
    <div>
      <Header />
      {issueList.map((data, index) => (
        <IssueItem
          key={data.id}
          title={data.title}
          number={data.number}
          writer={data.user.login}
          created={data.created_at}
          comments={data.comments}
          isAdvertisement={index === 3}
        />
      ))}
      {isEndData && (
        <S.EndDataContext>더 이상 불러올 데이터가 없습니다!</S.EndDataContext>
      )}
      <div ref={obsRef}>
        {isLoading && (
          <S.LoadingContainer>
            <LoadingSpinner />
          </S.LoadingContainer>
        )}
      </div>
    </div>
  );
};

export default IssueList;

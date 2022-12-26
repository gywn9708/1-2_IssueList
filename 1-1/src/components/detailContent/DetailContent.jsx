import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { getIssue } from "../../api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import S from "./styles";

const DetailContent = () => {
  const [issue, setIssue] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    getIssue(number)
      .then((res) => {
        console.log("res", res);
        setIssue(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [number]);

  console.log("number", number);
  console.log("issue봐라", issue);
  return (
    <S.DetailContentContainer>
      <S.DetailContentHeader>
        <div>
          <img src={issue?.user?.avatar_url} alt="avatar" />
          <div>
            {issue?.number} {issue?.title}
            <br />
            <span>
              작성자: {issue?.user?.login}, 작성일: {issue?.created_at}
            </span>
          </div>
        </div>
        <span> 코멘트: {issue?.comments}</span>
      </S.DetailContentHeader>
      <S.DetailContentBody>
        <ReactMarkdown
          children={issue?.body}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </S.DetailContentBody>
    </S.DetailContentContainer>
  );
};

export default DetailContent;

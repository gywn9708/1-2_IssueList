import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getIssue } from "../../apis/apis";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import S from "./styles";
import dateFormat from "../../utils/dateFormat";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const DetailContent = () => {
  const [issue, setIssue] = useState([]);
  const date = dateFormat(issue?.created_at);
  const { number } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getIssue(number)
      .then((res) => {
        if (res.state !== "open") navigate("/error");
        console.log("res", res);
        setIssue(res);
        setLoading(false);
      })
      .catch(() => {
        navigate("/error");
      });
  }, [number]);

  if (loading)
    return (
      <S.LoadingContainer>
        <LoadingSpinner />
      </S.LoadingContainer>
    );
  return (
    <S.DetailContentContainer>
      <S.DetailContentHeader>
        <div>
          <img src={issue?.user?.avatar_url} alt="avatar" />
          <div>
            {issue?.number} {issue?.title}
            <br />
            <span>
              작성자: {issue?.user?.login}, 작성일: {date}
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

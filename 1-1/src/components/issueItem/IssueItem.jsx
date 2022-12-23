/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import S from "./styles";
import dateFormat from "../../utils/dateFormat";
import { useNavigate } from "react-router";

const IssueItem = ({
  title,
  number,
  writer,
  created,
  comments,
  isAdvertisement,
}) => {
  const date = dateFormat(created);
  const navigate = useNavigate();
  const handleRedirectIssue = () => navigate(`/detail/${number}`);

  return (
    <>
      <S.IssueItemContainer>
        <div>
          <button onClick={handleRedirectIssue}>
            #{number} {title}
          </button>
          <br />
          <span>
            작성자: {writer}, 작성일: {date}
          </span>
        </div>
        <span>코멘트: {comments}</span>
      </S.IssueItemContainer>

      {isAdvertisement && (
        <a href="https://www.wanted.co.kr/">
          <S.AdvertisementContainer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="advertisement"
            />
            <span>원티드 Wanted - 취업, 이직, 커리어 콘텐츠</span>
          </S.AdvertisementContainer>
        </a>
      )}
    </>
  );
};

export default IssueItem;

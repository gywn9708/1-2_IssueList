import React from "react";
import { useNavigate } from "react-router";
import S from "./styles";

const Error = () => {
  const navigate = useNavigate();

  return (
    <S.ErrorContainer>
      <h1>NOT FOUND</h1>

      <button onClick={() => navigate("/")}>메인으로</button>
    </S.ErrorContainer>
  );
};

export default Error;

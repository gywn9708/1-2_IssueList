import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailContentContainer = styled.div`
  img {
    width: 100px;
  }
`;

const DetailContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  > div {
    gap: 20px;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const DetailContentBody = styled.div`
  padding: 0 2rem;
`;

const S = {
  LoadingContainer,
  DetailContentContainer,
  DetailContentHeader,
  DetailContentBody,
};

export default S;

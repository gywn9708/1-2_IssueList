import styled from "styled-components";

const IssueItemContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  line-height: 2rem;

  button {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    background: none;
    border: 0px;
    padding: 0;
    text-align: left;
  }
`;

const AdvertisementContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 2rem;
  border-bottom: 1px solid black;
  gap: 10px;
`;

const S = {
  IssueItemContainer,
  AdvertisementContainer,
};

export default S;

import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { getIssue } from "../../api";

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
  return <div> {issue.number}</div>;
};

export default DetailContent;

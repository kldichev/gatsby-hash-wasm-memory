import React from "react";

const ArticlePage = (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};
export default ArticlePage;

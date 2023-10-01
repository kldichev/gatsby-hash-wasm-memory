import { graphql } from "gatsby";
import React from "react";

const ArticlePage = (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};
export default ArticlePage;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
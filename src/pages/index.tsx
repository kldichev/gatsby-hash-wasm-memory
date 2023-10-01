import React from "react";

const IndexPage = (props) => {
  return (
    <div>
      hello world index.tsx
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default IndexPage;

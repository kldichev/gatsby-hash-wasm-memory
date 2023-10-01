import React from "react";

const ErrorPage = (props) => {
  return (
    <div>
      hello world 404.tsx
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default ErrorPage;

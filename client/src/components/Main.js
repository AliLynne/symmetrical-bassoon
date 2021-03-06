import React from "react";

const Main = (props) => {
  const { children, heading } = props;
  console.log(heading);
  return (
    <main className="main">
      <h2 className="main__heading">{heading}</h2>
      {children}
    </main>
  );
};

export default Main;

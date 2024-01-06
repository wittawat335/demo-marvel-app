import React from "react";

type Props = {};

const Test = (props: Props) => {
  let username: string;
  username = "nate";
  username = `result = ${username}`;

  return <div>{username.toUpperCase()}</div>;
};

export default Test;

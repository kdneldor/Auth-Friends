import React from "react";

const Friend = (props) => {
  console.log("Rendered Friends");
  return (
    <div>
      <p>NAME: {props.friend.name}</p>
      <p>AGE: {props.friend.age}</p>
      <p>EMAIL: {props.friend.email}</p>
      <p>ID: {props.friend.id}</p>
    </div>
  );
};

export default Friend;
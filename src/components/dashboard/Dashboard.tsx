import React from "react";
import AddPost from "../post/AddPost";
import Posts from "../post/Posts";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <>
      <AddPost />
      <Posts />
    </>
  );
}

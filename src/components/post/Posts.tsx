import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type Props = {};

const allPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export default function Posts({}: Props) {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  return (
    <>
      {data?.map((post: any) => (
        <div>
          <div>
            <Image 
              width={50}
              height={50}
              src={post?.author?.image}
              alt={post?.author?.name}
            />
            <h3>{post?.author?.name}</h3>
          </div>
          <div>
            <p>{post?.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}
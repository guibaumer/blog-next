'use client'
import { useEffect, useState } from "react";
import { PostData } from "@/domain/posts/post";
import { getAllPosts } from "@/data/posts/get-all-posts";
import HomePage from "@/containers/HomePage";

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getAllPosts('sort=id:DESC&pagination[start]=0&pagination[limit]=6').then((response) => {
      if (Array.isArray(response)) {
        setPosts(response);
      }
    });

  }, []);

  return (
    <>
    <HomePage posts={posts} />
    </>
  );
}

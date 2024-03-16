'use client'
import { useEffect, useState } from "react";
import { PostData, PostResponse } from "@/domain/posts/post";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { useParams } from 'next/navigation'
import HomePage from "@/containers/HomePage";
import { PaginationData } from "@/domain/pagination/pagination";

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pages, setPages] = useState<number | null>(null);
  const {params} = useParams();

  const page = Number(params[0]);

  let category = params[1] || '';
  if (typeof category === 'string') category = category[0].toUpperCase() + category.substring(1);
  
  // data to the pagination object
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;
  const categoryQuery = category ? `&filters[$and][0][category][name][$eq]=${category}` : '';
  const url = `sort=id:DESC&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const nextPage = page + 1;
  const previousPage = page - 1;
  const numberOfPosts = pages || 0;

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category
  }

  useEffect(() => {
    getAllPosts(url, true).then((response: PostResponse) => {
      if (!Array.isArray(response)) {
        setPosts(response.data);
        setPages(response.pagination)
        setLoading(false);
      }
    });
  }, []);


  if (loading) return <p>Carregando...</p>
  if (!posts.length) return <p>Posts não encontrados.</p>

  return (
    <>
    <HomePage posts={posts} category={category} pagination={pagination} />
    </>
  );
}

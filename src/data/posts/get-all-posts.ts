import { POSTS_URL } from "@/config/app-config";
import { PostData, PostResponse } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export type JsonPosts = {
  data: PostData[];
  meta: {
    pagination: {
      total: number;
    }
  };
}



export const getAllPosts = async(query = '', returnCount = false): Promise<PostResponse> => {
  const url = `${POSTS_URL}&${query}`;

  const posts: JsonPosts = await fetchJson(url)
  console.log('POSTS: ' + JSON.stringify(posts.meta.pagination.total));
  const data: PostData[] = [...posts.data];

  if (returnCount) {
    const res = {
      data,
      pagination: posts.meta.pagination.total
    }
    return res;
  } 

  return data;
  }
import { POSTS_URL } from "@/config/app-config";
import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export type JsonPosts = {
  data: PostData[];
}
export const getAllPosts = async(query = ''): Promise<PostData[]> => {
    const url = `${POSTS_URL}&${query}`

    const posts: JsonPosts = await fetchJson(url)
    const data: PostData[] = [...posts.data]; 
    console.log(posts);
    return data;
  }
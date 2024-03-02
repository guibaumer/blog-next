import { POSTS_URL, POSTS_URL_MAX } from "@/config/app-config";
import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export type JsonPosts = {
  data: PostData[];
}

export const getPost = async(slug: string | string[]): Promise<JsonPosts> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;

    // const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
    const url = `${POSTS_URL_MAX}&filters[slug][$eq]=${slugString}`;

    const posts: JsonPosts = await fetchJson(url);
    console.log(posts);
    return posts;
  }

// found on internet
// localhost:1337/api/posts?filters[slug][$eq]=post-3
// here: https://forum.strapi.io/t/strapi-v4-search-by-slug-instead-id/13469/4
// if some problem appears here, check the link etc etc

// this one worked in my api
// http://localhost:1337/api/posts?populate=*&filters[slug][$eq]=post-3
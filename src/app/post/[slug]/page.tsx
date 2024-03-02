'use client'

import { JsonPosts, getPost } from "@/data/posts/get-post";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'next/navigation';
import { PostAttributesData } from "@/domain/posts/post";
import { getText } from "@/utils/markdown-to-html";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Post } from "@/containers/Post";

export default function DynamicPost() {
    const [post, setPost] = useState<PostAttributesData | undefined>(); 
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState<BlocksContent>();
    const {slug} = useParams()

    async function searchData() {
        console.log(slug);
        const {data} = await getPost(slug);
        return data;
    }

    useEffect(() => {
        searchData().then((response) => {
            setPost(response[0].attributes);  
        });
    }, []);

    if (!post) return;

    getText(post.content).then((response) => {
        setText(response);
        setLoading(false);
    });

    if (!text) return;
    if (loading) return <p>Carregando...</p>
    
    return (
        <>
            <Post post={post} text={text} />
        </>
    )
}




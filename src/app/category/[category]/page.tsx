'use client'

import { getPost } from "@/data/posts/get-post";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'next/navigation';
import { PostAttributesData, PostData } from "@/domain/posts/post";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Post } from "@/containers/Post";
import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { Heading } from "@/components/Heading";
import ErrorMessage from '@/components/ErrorMessage';

export default function DynamicPost() {
    const [posts, setPosts] = useState<PostData[] | undefined>(); 
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    let {category} = useParams();

    if (typeof category === 'string') {
        category = category[0].toUpperCase() + category.substring(1);
    }

    async function searchData() {
        const data = await getAllPosts(`&filters[$and][0][category][name][$eq]=${category}`);

        // http://localhost:1337/api/posts?populate=*&_populate[author][_populate][0]=name&_populate[category][_populate][0]=name&sort=title:ASC&filters[$and][0][category][name][$eq]=Python

        return data;
    }

    useEffect(() => {
        searchData().then((response) => {
            console.log(response);
            setPosts(response);  
        });
    }, []);

    useEffect(() => {
        if (posts && posts.length >= 1) {
            setLoading(false);
        } else if (posts && posts.length === 0) {
            setError('Nenhum post encontrado.');
        }
    }, [posts]);

    // if (error) return <h3>{error}</h3>
    if (error) return <ErrorMessage message={error}/>
    if (loading) return <p>Carregando...</p>
    if (!posts) return;
    
    return (
        <>
            <HomePage posts={posts} title={`Categoria: ${category}`} />
        </>
    )
}




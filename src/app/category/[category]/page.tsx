'use client'

import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { PostData } from "@/domain/posts/post";
import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
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
        return data;
    }

    useEffect(() => {
        searchData().then((response) => {
            if (Array.isArray(response)) {
                setPosts(response);  
            }
        });
    }, []);

    useEffect(() => {
        if (posts && posts.length >= 1) {
            setLoading(false);
        } else if (posts && posts.length === 0) {
            setError('Nenhum post encontrado.');
        }
    }, [posts]);

    if (error) return <ErrorMessage message={error}/>
    if (loading) return <p>Carregando...</p>
    if (!posts) return;
    
    return (
        <>
            <HomePage posts={posts} title={`Categoria: ${category}`} />
        </>
    )
}




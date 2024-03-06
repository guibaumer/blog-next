import Header from '@/components/Header';
import styles from './styles.module.css';
import PostCard from '@/components/PostCard';
import { PostData } from "@/domain/posts/post"
import Footer from '@/components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '@/config/app-config';
import { Heading } from '@/components/Heading';

export type HomePageProps = {
    posts: PostData[];
    title?: string;
}

export default function HomePage({posts, title = ''}: HomePageProps) {
    console.log('HOMEPAGE: ' + JSON.stringify(posts[0]));
    return (
        <>
        <Header />

        {title && (
            <Heading>
                {title}
            </Heading>
        )}

        <section className={styles.main_section}>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <PostCard 
                     title={post.attributes.title}
                     key={post.id}
                     slug={post.attributes.slug}
                    coverUrl={post.attributes.cover?.data?.attributes?.formats?.small?.url || post.attributes.cover?.data?.attributes?.url || ''}
                    // coverUrl={post.cover.data.attributes.formats?.small?.url || post.cover.data.attributes.url || ''}
                     /> 
                ))} 
            </div>
        </section>

        <Footer />
        </>
    )
}
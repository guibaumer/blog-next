import Header from '@/components/Header';
import styles from './styles.module.css';
import PostCard from '@/components/PostCard';
import { PostData } from "@/domain/posts/post"
import Footer from '@/components/Footer';

export type HomePageProps = {
    posts: PostData[];
}

export default function HomePage({posts}: HomePageProps ) {
    return (
        <>
        <Header />

        <section className={styles.main_section}>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <PostCard 
                     title={post.attributes.title}
                     key={post.id}
                     slug={post.attributes.slug}
                     coverUrl={post.attributes.cover.data.attributes.formats.small.url}
                     /> 
                ))} 
            </div>
        </section>

        <Footer />
        </>
    )
}
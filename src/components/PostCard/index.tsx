import { PostAttributesData } from '@/domain/posts/post';
import styles from './styles.module.css';
import Link from 'next/link';

export type PostCardProps = {
    title: string;
    // id: number;
    slug: string;
    coverUrl: string;
}

export default function PostCard({ title, slug, coverUrl}: PostCardProps) {
    return (
        <div className={styles.card_div}>

            <Link href='/post/[slug]' as={`/post/${slug}`}>
                <img className={styles.cover_image}
                    src={coverUrl}
                    alt={title}
                />
            </Link>

            <Link className={styles.post_title_link} href='/post/[slug]' as={`/post/${slug}`}>
                {title}
            </Link>

        </div>
    )
}
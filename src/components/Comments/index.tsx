import { SITE_URL } from '@/config/app-config';
import styles from './styles.module.css';
import {DiscussionEmbed} from 'disqus-react';

export type CommentsProps = {
    slug: string;
    title: string;
}

export default function Comments({ slug, title}: CommentsProps) {
    return (
        <>

        <div className={styles.div_disqus}>
        <DiscussionEmbed
        shortname='blog-strapi-2'
        config={{
            url: `${SITE_URL}/post/${slug}`,
            identifier: slug,
            title: title,
            language: 'pt_BR',
        }}
        />
        </div>
        
        </>
    )
}
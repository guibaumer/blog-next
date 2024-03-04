import styles from './styles.module.css';
import PostDate from '../PostDate';
import Link from 'next/link';
import { SITE_URL } from '@/config/app-config';

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
}

export default function PostDetails({author, category, date}: PostDetailsProps) {
    const url = `${SITE_URL}category/${category}`;

    return (
        <div className={styles.details_div}>
            Publicado em&nbsp;<PostDate date={date}/>&nbsp; por {author} em
            &nbsp;<Link className={styles.link} href={url}><a>{category}</a></Link>
        </div>
    )
}
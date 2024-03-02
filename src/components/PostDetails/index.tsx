import { formatDate } from '@/utils/format-date';
import styles from './styles.module.css';
import PostDate from '../PostDate';

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
}

export default function PostDetails({author, category, date}: PostDetailsProps) {
    return (
        <p className={styles.details_p}>
            Publicado em&nbsp;<PostDate date={date}/>&nbsp; por {author} em {category}
        </p>
    )
}
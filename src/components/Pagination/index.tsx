import { PaginationData } from '@/domain/pagination/pagination';
import styles from './styles.module.css';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export default function Pagination({ numberOfPosts, category, nextPage, postsPerPage, previousPage }: PaginationProps) {
    console.log(numberOfPosts, category, nextPage, postsPerPage, previousPage);

    const categoryName = category || '';
    const nextLink = `/pages/${nextPage}/${categoryName}/`;
    const previousLink = `/pages/${previousPage}/${categoryName}/`;
    const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
    const hasPreviousPage = previousPage >= 1;

    return (
        <div className={styles.pagination_container}>
            {hasPreviousPage && (
                <Link className={styles.left} as={previousLink} href="/posts/pages/[...param]">Previous</Link>
            )}

            {hasNextPage && (
                <Link className={styles.right} as={nextLink} href="/posts/pages/[...param]">Next</Link>
            )}
        </div>    
    )
}
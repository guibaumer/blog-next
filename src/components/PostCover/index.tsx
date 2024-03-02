import styles from './styles.module.css';

export type CoverProps = {
    url: string;
    alt: string;
}

export function PostCover({ url, alt }: CoverProps) {
    return (
        <img className={styles.cover} src={url} alt={alt} />
    )
}
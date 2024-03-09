import styles from './styles.module.css';

export type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return (
        <h2 className={styles.h2}>
            {children}
        </h2>
    )
}
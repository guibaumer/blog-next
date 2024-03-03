import Link from 'next/link';
import styles from './styles.module.css';
import { HOME } from '@/config/app-config';

export type ErrorProps = {
    message: string;
}

export default function Error({ message }: ErrorProps) {
    return (
        <>
            <h3 className={styles.error}>{message}</h3>   
            <Link className={styles.link} href={HOME}>Voltar ao início</Link>    
        </>
    )
}
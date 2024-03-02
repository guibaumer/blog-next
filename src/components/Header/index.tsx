import { HOME, SITE_NAME } from "@/config/app-config";
import styles from './styles.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={`${HOME}`}>
                <h1 className={styles.header_h1}>{SITE_NAME}</h1>
            </Link>
        </header>
    )
}
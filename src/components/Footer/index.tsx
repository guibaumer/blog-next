import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Site desenvolvido por 
            <a className={styles.footer_a} 
            href='github.com/guibaumer'> Gui</a>.
        </footer>
    )
}
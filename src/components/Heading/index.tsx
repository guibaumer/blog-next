import style from './css.module.css';

export type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return (
        <h2 className={style.h2}>
            {children}
        </h2>
    )
}
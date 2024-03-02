import { formatDate } from '@/utils/format-date';
import styles from './styles.module.css';

export type DateProps = {
    date: string;
}

export default function PostDate({date}: DateProps) {
    return (
        <div>
            {formatDate(date)}
        </div>
    )
}
import styles from './styles.module.css';

interface IProps {
    id: string;
    title: string;
    content: string;
    held_on_time: string;
    start_time: string;
    end_time: string;
    limit: number;
    subscribed: number;
}

function AppointmentSearchResult({id, title, content, held_on_time, start_time, end_time, limit, subscribed}: IProps) {
    return (
        <div className={`${styles.appointmentSearchResult} flex flex-row rounded-md bg-opa p-2`}>
            <div className="flex-2">
                <p>{title}</p>
                <p>{content}</p>
            </div>
            <div className="flex-1">
                2
            </div>
        </div>
    )
}

export default AppointmentSearchResult;
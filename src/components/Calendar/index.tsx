import {useState, forwardRef, useImperativeHandle, Ref} from 'react';
import CalendarBox from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import styles from './styles.module.css';

export interface IForwardRef {
    value: () => string;
}

interface IProps {

}

function Calendar(props: IProps, forward: Ref<IForwardRef>) {
    const [value, onChange] = useState(new Date());

    useImperativeHandle(forward, () => ({
        value: () => value.toLocaleDateString('en-US')
    }))

    return (
        <div>
            <CalendarBox onChange={onChange} value={value} locale="en-US" className={`${styles.calendar} mx-auto rounded-md overflow-hidden shadow-md`} />
        </div>
    )
}

export default forwardRef(Calendar);
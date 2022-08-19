import { useContext } from 'react';
import {ImLocation} from 'react-icons/im';
import styles from './styles.module.css'
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";

interface IProps {
    name: string;
}

function Destination({name}: IProps) {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);

    return (
        <div onClick={() => appointmentPropertyContext.setDestination(name)} className={styles.destination}>
            <div className="flex items-center p-4 gap-x-5">
                <ImLocation className="text-xl text-blur-gray"/><span className="text-lg font-bold text-blur-gray">{name}</span>
            </div>
            <hr/>
        </div>
    )
}

export default Destination;
import { useContext } from 'react';
import {IconType} from "react-icons";
import { AppointmentPropertyContext } from '../../contexts/appointmentProperty'
import styles from './styles.module.css';

interface IProps {
    id: string;
    name: string;
    Icon: IconType
}

function TagBox({id, name, Icon}: IProps) {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext)

    return (
        <div onClick={() => appointmentPropertyContext.setTag(name)} className={`${styles.destination} bg-opa rounded-md flex flex-col gap-y-2 p-2 md:p-4 lg:p-6 shadow-md`}>
            <div><Icon className="w-6 h-6"/></div>
            <div>
                <span className="font-semibold text-base md:text-lg">{name}</span>
            </div>
        </div>
    )
}

export default TagBox;
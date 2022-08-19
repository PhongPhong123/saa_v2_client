import {ImLocation} from 'react-icons/im';
import styles from './styles.module.css'

interface IProps {
    name: string;
}

function Destination({name}: IProps) {
    return (
        <div className={styles.destination}>
            <div className="flex items-center p-4 gap-x-5">
                <ImLocation className="text-xl text-blur-gray"/><span className="text-lg font-bold text-blur-gray">{name}</span>
            </div>
            <hr/>
        </div>
    )
}

export default Destination;
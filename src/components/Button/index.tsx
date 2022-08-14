import styles from './styles.module.css';

export enum EComponentType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface IProps {
    name: string;
    type: EComponentType.PRIMARY | EComponentType.SECONDARY;
}

function Button({name, type}: IProps) {
    return (
        <button className={`${styles.button} bg-blue-400 rounded-md px-4 py-2 min-w-fit text-white font-bold drop-shadow-md`}>{name}</button>
    )
}

export default Button;
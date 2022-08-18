import styles from './styles.module.css';
import { IconType } from "react-icons";

export enum EComponentType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface IProps {
    content?: string;
    type: EComponentType.PRIMARY | EComponentType.SECONDARY;
    Icon?: IconType;
}

function Button({content, type, Icon}: IProps) {
    if (content && Icon)
        throw new Error("content and Icon prop can pass together");
    if (!content && !Icon)
        throw new Error("must require either content or Icon");
    if (type === EComponentType.PRIMARY && content && !Icon)
        return <button className={`${styles.button} bg-opa rounded-md px-4 py-2 min-w-fit text-blur-gray font-bold drop-shadow-md`}>{content}</button>;
    if (type === EComponentType.SECONDARY && content && !Icon)
        return <button className={`${styles.button} bg-opa rounded-full px-2 py-2 min-w-fit text-blur-gray font-bold drop-shadow-md`}>{content}</button>;
    if (type === EComponentType.PRIMARY && !content && Icon)
        return <button className={`${styles.button} bg-opa rounded-md px-4 py-2 min-w-fit text-black font-bold drop-shadow-md`}>
            <Icon/>
        </button>;
    if (type === EComponentType.SECONDARY && !content && Icon)
        return <button className={`${styles.button} bg-opa rounded-full px-2 py-2 min-w-fit text-black font-bold drop-shadow-md`}>
            <Icon/>
        </button>;
    return <button disabled>Error</button>
}

export default Button;
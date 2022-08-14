import styles from './styles.module.css';

interface IProps {
    tagName: string;
    tagCode: string;
}

function TagButton({tagName, tagCode}: IProps) {
    return (
        <div className={`${styles.tagButton} bg-blue-400 rounded-md px-3 text-center min-w-fit text-white drop-shadow-md`}>
            {tagName}
        </div>
    )
}

export default TagButton;
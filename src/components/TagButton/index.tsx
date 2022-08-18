import styles from './styles.module.css';

interface IProps {
    tagName: string;
    tagCode: string;
}

function TagButton({tagName, tagCode}: IProps) {
    return (
        <div className={`${styles.tagButton} bg-opa rounded-md px-3 text-center min-w-fit text-blur-gray drop-shadow-md`}>
            {tagName}
        </div>
    )
}

export default TagButton;
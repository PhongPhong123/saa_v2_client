import styles from './styles.module.css';

interface IProps {
    name: string;
    codename: string;
    image?: string;
}

function Destination({name, codename, image}: IProps) {
    if (image)
        image = `${process.env.REACT_APP_SERVER_HOST}/public/locations/${image}`
    else
        image = `${process.env.REACT_APP_SERVER_HOST}/public/locations/default_location.png`

    return (
        <div className={styles.destination}>
            <div className="w-44 h-44 rounded-md overflow-hidden">
                <img className="w-full h-full" src={image} alt={name}/>
            </div>
            <p className="text-center text-blur-gray font-bold">{name}</p>
        </div>
    )
}

export default Destination;
import { Link } from 'react-router-dom';
import styles from './Demo.module.css';

interface Colors {
    color: string;
    backgroundColor: string;
}
interface Props {
    productName: string;
    tagline: string;
    image: string;
    colors: Colors;
}

const Demo = ({ productName, tagline, image, colors }: Props) => {
    return (
        <div className={styles.demoContainer} style={{ backgroundColor: `${colors.backgroundColor}` }}>
            <div className={styles.textContainer} style={{ color: `${colors.color}` }}>
                <h2>{productName}</h2>
                <p>{tagline}</p>
                <Link to="/catalogue" className={styles.demoLink}>
                    Open in catalogue
                </Link>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
            </div>
        </div>
    );
};

export default Demo;

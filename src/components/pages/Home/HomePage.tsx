import { Link } from 'react-router-dom';
import Demo from '../../Demo/Demo';
import { lightColors } from '../../../constants/constants';
import { darkColors } from '../../../constants/constants';
import { demoProducts } from '../../../constants/constants';
import { useColorModeValue } from '@chakra-ui/react';
import styles from './HomePage.module.css';

const HomePage = () => {
    const colorSchema = useColorModeValue('dark', 'light');

    return (
        <div className={styles.homeContainer}>
            <Link to="/catalogue" className={styles.link}>
                View catalog of devices
            </Link>
            {demoProducts.map((product) => {
                return (
                    <Demo
                        key={product.productName}
                        {...product}
                        colors={colorSchema === 'light' ? darkColors : lightColors}
                    />
                );
            })}
        </div>
    );
};

export default HomePage;

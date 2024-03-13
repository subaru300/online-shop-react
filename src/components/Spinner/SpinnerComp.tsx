import { Spinner } from '@chakra-ui/react';
import styles from './SpinnerComp.module.css';

const SpinnerComp = () => {
    return (
        <Spinner
            className={styles.spinner}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    );
};

export default SpinnerComp;

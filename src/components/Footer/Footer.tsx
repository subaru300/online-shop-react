import { Box, Divider } from '@chakra-ui/react';
import Menu from '../Menu/Menu';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <Box>
            <Divider />
            <div>
                <div className={styles.footerContainer}>
                    <p className={styles.tel}>Tel. +555 555 55</p>
                    <Menu isFooter={true}/>
                </div>
            </div>
        </Box>
    );
};

export default Footer;

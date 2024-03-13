import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import { Box, Divider } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Menu from '../Menu/Menu';
import CartButton from '../CartButton/CartButton';
import CartModal from '../CartModal/CartModal';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    const { onOpen } = useContext(CartContext);

    return (
        <>
            <CartModal />
            <Box className={styles.header}>
                <Link to="/online-shop-react">
                    {' '}
                    <img src={logo} className={styles.logo} />
                </Link>
                <Menu />
                <div className={styles.cartAndSwitchContainer}>
                    <CartButton onClick={() => onOpen()} />
                    <ColorModeSwitcher className={styles.switcher} />
                </div>
            </Box>
            <Divider />
        </>
    );
};

export default Header;

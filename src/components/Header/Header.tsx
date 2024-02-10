import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import { Box, Divider } from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import Menu from '../Menu/Menu';
import CartButton from '../CartButton/CartButton';
import CartModal from '../CartModal/CartModal';
import styles from './Header.module.css';

const Header = () => {
    const { onOpen } = useContext(CartContext);

    return (<>
        <CartModal />
        <Box className={styles.header}>
            <h3>DEVICE SHOP ONLINE</h3>
            <Menu/>
            <div>
                <CartButton onClick={() => onOpen()}/>
                <ColorModeSwitcher className={styles.switcher}/>
            </div>
        </Box>
         <Divider/>
         </>
    )
};

export default Header;
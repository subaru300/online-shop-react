import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { CartContext } from '../cart/CartContext';
import styles from './CartButton.module.css';

const CartButton = ({ onClick }: { onClick: () => void }) => {
    const { cartItems } = useContext(CartContext);

    return (
        <Button
            className={styles.btnCart}
            onClick={onClick}
            leftIcon={<FaOpencart />}
            colorScheme="orange"
            variant="solid"
        >
            {`Cart ${cartItems.length}`}
        </Button>
    );
};

export default CartButton;

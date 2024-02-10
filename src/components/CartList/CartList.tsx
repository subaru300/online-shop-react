import { Button, ButtonGroup, Divider, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CartContext } from "../cart/CartContext";
import styles from './CartList.module.css';

const CartList = () => {
    const { cartItems, removeFromCart, onIncrease, onDecrease } = useContext(CartContext);

    return <ul className={styles.cartList}>
    {cartItems.map((item) => {
      return <div key={item.id}>
        <li className={styles.listElement}>
          <div className={styles.itemInfo}>
            <Image 
              className={styles.image}
              src={item.imageLink} 
              alt='photo'
              borderRadius='md' />
              <div>
                <div>
                  {item.name}
                </div>
                <div className={styles.price}>
                  Price ${item.price}
                </div>
              </div>
          </div>
          <div className={styles.itemBtnsGroup}>
          <ButtonGroup size="sm" isAttached>
                <Button onClick={() => onDecrease(item.name)} isDisabled={item.quantity === 1}>-</Button>
                <Button >{item.quantity}</Button>
                <Button onClick={() => onIncrease(item.name)}>+</Button>
            </ButtonGroup>
          <MdRemoveShoppingCart className={styles.removeBtn} onClick={() => removeFromCart(item.id)}/>
          </div>
     </li>
     <Divider mb='10px'/>
      </div>
    })}
    </ul>
};

export default CartList;
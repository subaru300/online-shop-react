import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../cart/CartContext";
import styles from './CartModal.module.css';
import CartList from "../CartList/CartList";

const CartModal = () => {
    const { cartItems, isOpen, onClose } = useContext(CartContext);
  
    return (
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          size='2xl'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader 
              fontSize='32px'>{cartItems.length !== 0 ? 'Place your order' : 'Your cart is empty'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CartList/>
              <div className={styles.totalCart}>
                {`Total in cart: $${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}`}
              </div>
            </ModalBody>
           
            <ModalFooter>
              <Button onClick={onClose} mr='10px'>Close</Button>
              <Button colorScheme='green' isDisabled={cartItems.length === 0}>Go to pay</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  };

  export default CartModal;
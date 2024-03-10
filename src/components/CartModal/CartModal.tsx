import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Box, Alert, AlertIcon } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../cart/CartContext";
import styles from './CartModal.module.css';
import CartList from "../CartList/CartList";
import CartOrderForm from "../CartOrderForm/CartOrderForm";

const CartModal = () => {
    const { cartItems, isOpen, onClose } = useContext(CartContext);
    const [isOrderDetailsOpen, setIsOrredDetailsOpen] = useState(false);
    const [isOrderSent, setIsOrderSent] = useState(false);

    useEffect(() => {
      if(!isOpen) {
        setIsOrredDetailsOpen(false);
      }
    }, [isOpen])


    const onNextStepHandler = () => {
      setIsOrredDetailsOpen(true);
    }

    const successMessage = <Alert status='success'>
    <AlertIcon />
    Well done!
    </Alert>;

    const modalContent = <>
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
              {isOrderDetailsOpen ? <CartOrderForm 
                                        onBack={() => setIsOrredDetailsOpen(false)}
                                        onSend={(bool) => setIsOrderSent(bool)}
                                        /> : 
              <Box>
                <Button onClick={onClose} mr='10px'>Close</Button>
                <Button 
                  colorScheme='green' 
                  isDisabled={cartItems.length === 0} 
                  onClick={onNextStepHandler}>Next step</Button>
                </Box>}
            
            </ModalFooter>
    </>

    return (
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          size='2xl'
        >
          <ModalOverlay />
          <ModalContent>
          {isOrderSent ? successMessage : modalContent}
          </ModalContent>
        </Modal>
    )
  };

  export default CartModal;
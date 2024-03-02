import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, InputGroup, InputLeftElement, Alert, AlertIcon } from '@chakra-ui/react'
import { FaPhoneAlt } from 'react-icons/fa';
import { BuyNowDialog } from '../../interfaces/interfaces';
import sendData from '../../api/sendData';
import { RefObject, useRef, useState } from 'react';

const BuyNowModal = ({ isOpen, onClose, productName }: BuyNowDialog) => {
    const [isOrderSending, setIsOrderSending] = useState(false);
    const enteredName: RefObject<HTMLInputElement> | null = useRef(null);
    const enteredTel: RefObject<HTMLInputElement> | null = useRef(null);

    const onSendOrderHandler = () => {
      const userName = enteredName.current?.value;
      const userPhone = enteredTel.current?.value;
      setIsOrderSending(true);

      setTimeout(() => {
        sendData({ productName, userName, userPhone });
        setIsOrderSending(false);
        onClose();
      }, 3000);
    }

    const successMessage = <Alert status='success'>
    <AlertIcon />
    We have recive your order and call you ASAP.
    </Alert>;

    const modalContent = <>
    <ModalHeader>Quick buy</ModalHeader>
    
    <ModalCloseButton />
    <ModalBody>
     <Input placeholder='My name' mb='10px' ref={enteredName}/>
     <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <FaPhoneAlt />
        </InputLeftElement>
        <Input type='tel' placeholder='Phone number' ref={enteredTel} />
    </InputGroup>
    </ModalBody>

    <ModalFooter>
      <Button mr={3} onClick={onClose}>
        Close
      </Button>
      <Button 
        colorScheme='green' 
        onClick={onSendOrderHandler}
        isLoading={isOrderSending}>Call me</Button>
    </ModalFooter>
    </>;

    return (
    <Modal isOpen={isOpen} onClose={onClose}  isCentered>
    <ModalOverlay/>
    <ModalContent>
    {isOrderSending ? successMessage : modalContent }
    </ModalContent>
    </Modal>
    )
};

export default BuyNowModal;
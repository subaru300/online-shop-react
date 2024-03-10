import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, InputGroup, InputLeftElement, Alert, AlertIcon } from '@chakra-ui/react'
import { FaPhoneAlt } from 'react-icons/fa';
import { BuyNowDialog } from '../../interfaces/interfaces';
import sendData from '../../api/sendData';
import { ChangeEvent, useState } from 'react';
import styles from './BuyNowModal.module.css';
import validateInput from '../../validation/validation';

const BuyNowModal = ({ isOpen, onClose, productName }: BuyNowDialog) => {
    const [isOrderSending, setIsOrderSending] = useState(false);

    const [enteredUserName , setEnteredUserName] = useState('');
    const [enteredUserPhone, setEnteredUserPhone] = useState('');

    const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
    const [wasPhoneInputTouched, setWasPhoneInputTouched] = useState(false);

    const { isValid: isEnteredNameValid, isInvalid: isNameInputInvalid, errorText: nameErrorMessage } = validateInput(enteredUserName, false, false, false, wasNameInputTouched);
    const { isValid: isEnteredPhoneValid, isInvalid: isPhoneInputInvalid, errorText: phoneErrorMessage } = validateInput(enteredUserPhone, true, false, false, wasPhoneInputTouched);

    const nameChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setEnteredUserName(e.target.value);
    };

    const phoneChangeInputHandler  = (e: ChangeEvent<HTMLInputElement>) => {
      setEnteredUserPhone(e.target.value);
    };

    const nameInputLostFocusHandler = () => {
      setWasNameInputTouched(true);
    };

    const phoneInputLostFocusHandler = () => {
      setWasPhoneInputTouched(true);
    };

    const onSendOrderHandler = () => {
      setWasNameInputTouched(true);
      setWasPhoneInputTouched(true);

      if(!isEnteredNameValid || !isEnteredPhoneValid) {
        return;
      }

      setIsOrderSending(true);

      setTimeout(() => {
        sendData({ productName, enteredUserName, enteredUserPhone });
        setIsOrderSending(false);
        onClose();
      }, 1500);
    }

    const successMessage = <Alert status='success'>
    <AlertIcon />
    Well done!
    </Alert>;

    const modalContent = <>
    <ModalHeader>Quick buy</ModalHeader>
    
    <ModalCloseButton />
    <ModalBody>
     <Input 
        className={styles.nameInput} 
        placeholder='My name' 
        mb='10px'
        isInvalid={isNameInputInvalid}
        onChange={nameChangeInputHandler}
        onBlur={nameInputLostFocusHandler}/>
     {isNameInputInvalid && <p className={styles.errorText}>{nameErrorMessage}</p>}
     <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <FaPhoneAlt />
        </InputLeftElement>
        <Input 
            className={styles.phoneInput} 
            type='tel' 
            placeholder='Phone number' 
            mb='10px'
            onChange={phoneChangeInputHandler}
            onBlur={phoneInputLostFocusHandler}
            isInvalid={isPhoneInputInvalid}/>
    </InputGroup>
    {isPhoneInputInvalid && <p className={styles.errorText}>{phoneErrorMessage}</p>}
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
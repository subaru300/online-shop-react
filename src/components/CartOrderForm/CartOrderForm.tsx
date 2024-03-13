import {
    Alert,
    AlertIcon,
    Box,
    Button,
    ButtonGroup,
    Input,
    InputGroup,
    InputLeftElement,
    ring,
} from '@chakra-ui/react';
import validateInput from '../../validation/validation';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './CartOrderForm.module.css';
import { ChangeEvent, useContext, useState } from 'react';
import { CgRename } from 'react-icons/cg';
import { SiMinutemailer } from 'react-icons/si';
import { IoIosHome } from 'react-icons/io';
import sendData from '../../api/sendData';
import { CartContext } from '../cart/CartContext';

interface Props {
    onBack: () => void;
    onSend: (bool: boolean) => void;
}

const CartOrderForm = ({ onBack, onSend }: Props) => {
    const { cartItems, clearCart, isOpen, onClose } = useContext(CartContext);

    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');

    const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
    const [wasMailInputTouched, setWasMailInputTouched] = useState(false);
    const [wasPhoneInputTouched, setWasPhoneInputTouched] = useState(false);
    const [wasAddressInputTouched, setWasAddressInputTouched] = useState(false);

    const {
        isValid: isEnteredNameValid,
        isInvalid: isNameInputInvalid,
        errorText: nameErrorMessage,
    } = validateInput(enteredName, false, false, false, wasNameInputTouched);
    const {
        isValid: isEnteredEmailValid,
        isInvalid: isEmailInputInvalid,
        errorText: emailErrorMessage,
    } = validateInput(enteredEmail, false, true, false, wasMailInputTouched);
    const {
        isValid: isEnteredPhoneValid,
        isInvalid: isPhoneInputInvalid,
        errorText: phoneErrorMessage,
    } = validateInput(enteredPhone, true, false, false, wasPhoneInputTouched);
    const {
        isValid: isEnteredAddressValid,
        isInvalid: isAddressInputInvalid,
        errorText: addressErrorMessage,
    } = validateInput(enteredAddress, false, false, true, wasAddressInputTouched);

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
        setter(e.target.value);
    };

    const onInputLostFocusHandler = (setter: (value: boolean) => void) => {
        setter(true);
    };

    const onSubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setWasNameInputTouched(true);
        setWasMailInputTouched(true);
        setWasPhoneInputTouched(true);
        setWasAddressInputTouched(true);

        if (!isEnteredNameValid || !isEnteredEmailValid || !isEnteredPhoneValid || !isEnteredAddressValid) {
            return;
        }

        sendData({
            productName: cartItems,
            enteredUserName: enteredName,
            enteredUserPhone: enteredPhone,
            email: enteredEmail,
            address: enteredAddress,
        });
        clearCart();
        onSend(true);

        setTimeout(() => {
            onClose();
            onSend(false);
        }, 1500);
    };

    const inputs = [
        {
            type: 'text',
            placeholder: 'Name',
            icon: <CgRename />,
            onChange: (e: ChangeEvent<HTMLInputElement>) => onInputChangeHandler(e, setEnteredName),
            onBlur: () => onInputLostFocusHandler(setWasNameInputTouched),
            isInvalid: isNameInputInvalid,
            errorMessage: nameErrorMessage,
        },
        {
            type: 'email',
            placeholder: 'Email',
            icon: <SiMinutemailer />,
            onChange: (e: ChangeEvent<HTMLInputElement>) => onInputChangeHandler(e, setEnteredEmail),
            onBlur: () => onInputLostFocusHandler(setWasMailInputTouched),
            isInvalid: isEmailInputInvalid,
            errorMessage: emailErrorMessage,
        },
        {
            type: 'tel',
            placeholder: 'Phone number',
            icon: <FaPhoneAlt />,
            onChange: (e: ChangeEvent<HTMLInputElement>) => onInputChangeHandler(e, setEnteredPhone),
            onBlur: () => onInputLostFocusHandler(setWasPhoneInputTouched),
            isInvalid: isPhoneInputInvalid,
            errorMessage: phoneErrorMessage,
        },
        {
            type: 'text',
            placeholder: 'Address',
            icon: <IoIosHome />,
            onChange: (e: ChangeEvent<HTMLInputElement>) => onInputChangeHandler(e, setEnteredAddress),
            onBlur: () => onInputLostFocusHandler(setWasAddressInputTouched),
            isInvalid: isAddressInputInvalid,
            errorMessage: addressErrorMessage,
        },
    ];

    return (
        <form className={styles.form} onSubmit={onSubmitFormHandler}>
            {inputs.map((input, index) => {
                return (
                    <InputGroup key={index} className={styles.inputContainer}>
                        <InputLeftElement pointerEvents="none">{input.icon}</InputLeftElement>
                        <Input
                            type={input.type}
                            placeholder={input.placeholder}
                            onChange={input.onChange}
                            onBlur={input.onBlur}
                            isInvalid={input.isInvalid}
                        />
                        {input.isInvalid && <p className={styles.errorText}>{input.errorMessage}</p>}
                    </InputGroup>
                );
            })}
            <ButtonGroup className={styles.bntsContainer} variant="solid" spacing="3">
                <Button onClick={onBack}>Back</Button>
                <Button colorScheme="green" type="submit">
                    Make order
                </Button>
            </ButtonGroup>
        </form>
    );
};

export default CartOrderForm;

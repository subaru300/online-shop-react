import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaPhoneAlt } from 'react-icons/fa';
import { BuyNowDialog } from '../../interfaces/interfaces';

const BuyNowModal = ({ isOpen, onClose }: BuyNowDialog) => {
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}  isCentered>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Quick buy</ModalHeader>
            
            <ModalCloseButton />
            <ModalBody>
             <Input placeholder='My name' mb='10px'/>
             <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <FaPhoneAlt />
                </InputLeftElement>
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='green'>Call me</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
};

export default BuyNowModal;
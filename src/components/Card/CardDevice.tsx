import { Button, ButtonGroup, Divider, Image, Stack, Text, useDisclosure, Card, CardBody, CardFooter } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CartContext } from '../cart/CartContext';
import BuyNowModal from '../BuyNowModal/BuyNowModal';
import { LoadedDevice } from '../../interfaces/interfaces';
import styles from './CardDevice.module.css';

const CardDevice = ({ name, imageLink, description, price, id, quantity }: LoadedDevice) => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const { addToCart } = useContext(CartContext);

  // open Buy Now dialog
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onBuyNowHandler = (name: string) => {
    onOpen();
    setSelectedDevice(name);
};

return ( <div className={styles.cardContainer}>
  {isOpen && <BuyNowModal 
                isOpen={isOpen} 
                onClose={onClose} 
                productName={selectedDevice}/>}
<Card boxShadow='xs' maxW='sm' className={styles.card}>
  <CardBody className={styles.cardBody}>
    <div className={styles.imgContainer}>
    <Image
      className={styles.image}
      src={imageLink}
      alt='photo'
      borderRadius='md'
    />
    </div>
    <Stack className={styles.descriptionContainer}>
      <h2 className={styles.cardHeader}>{name}</h2>
      <div className={styles.specifications}>
        <h3>Technical specifications</h3>
        <p><span>OS:</span> {description.split(',')[0]}</p>
        <p><span>Chipset:</span> {description.split(',')[1]}</p>
        <p><span>Display:</span> {description.split(',')[2]}</p>
      </div>
      <Text color='blue.600' className={styles.price}>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup className={styles.btnsContainer}>
      <Button variant='solid' colorScheme='blue' onClick={() => onBuyNowHandler(name)}>
        Buy now
      </Button>
      <Button className={styles.addBtn} variant='ghost' colorScheme='blue' onClick={() => addToCart({ name, imageLink, description, price, id, quantity })}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
)
};

export default CardDevice;
import { Button, ButtonGroup, Divider, Image, Stack, Text, useDisclosure, Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Device } from "../../interfaces/interfaces";
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import BuyNowModal from '../BuyNowModal/BuyNowModal';
import styles from './CardDevice.module.css';

const CardDevice = ({ name, imageLink, description, price, id, quantity }: Device) => {
  const { addToCart } = useContext(CartContext);

  // open Buy Now dialog
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onBuyNowHandler = (name: string) => {
    onOpen();
};

return ( <div className={styles.cardContainer}>
  {isOpen && <BuyNowModal isOpen={isOpen} onClose={onClose}/>}
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
        <p><span>OS:</span> {description[0]}</p>
        <p><span>Chipset:</span> {description[1]}</p>
        <p><span>Display:</span> {description[2]}</p>
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
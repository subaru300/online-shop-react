import { Button, ButtonGroup, Divider, Heading, Image, Stack, Text, useDisclosure, Card, CardBody, CardFooter } from '@chakra-ui/react';
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
      <Heading className={styles.cardHeader}>{name}</Heading>
      <Text className={styles.cardText}>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl' className={styles.price}>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2' className={styles.btnsContainer}>
      <Button variant='solid' colorScheme='blue' onClick={() => onBuyNowHandler(name)}>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={() => addToCart({ name, imageLink, description, price, id, quantity })}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
)
};

export default CardDevice;
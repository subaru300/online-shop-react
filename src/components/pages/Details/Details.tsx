// import styles from './Details.module.css'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Container, Heading, Image, Stack, Text, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { loadedDevicesStore } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../cart/CartContext';

const Details = () => {
    const { name } = useParams<{ name: string }>();
    const loadedDevices = loadedDevicesStore.loadedDevices;
    const selectedDevice = loadedDevices.find((device) => device.name === name);

    const { addToCart } = useContext(CartContext);

    const toast = useToast();

    const navigate = useNavigate();

    const onCartAddHandler = () => {
      selectedDevice && addToCart(selectedDevice);
      toast({
        title: 'Your Cart was changed',
        status: 'info',
        duration: 1000,
        isClosable: true,
    });
    };
    
  return (
    <Container minHeight="85vh">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant = 'unstyled'
        mt={10}
        mb={10}
>
<Center>
  <Image
    objectFit='cover'
    maxW={{ base: '200px', sm: '200px' }}
    mr={{sm: '10'}}
    src={selectedDevice?.imageLink}
    alt='deviceImage'
  />
</Center>
  <Stack>
    <CardBody>
      <Heading size='lg'>{selectedDevice?.name}</Heading>
      <Stack direction='row'>
      <Text as='b' pt='2' minW={100}>
       Display
      </Text>
      <Text pt='2' color='grey'>
       {selectedDevice?.display}
      </Text>
      </Stack>

      <Stack direction='row'>
      <Text as='b' minW={100}>
       CPU
      </Text>
      <Text color='grey'>
       {selectedDevice?.cpu}
      </Text>
      </Stack>

      <Stack direction='row'>
      <Text as='b' minW={100}>
       RAM
      </Text>
      <Text color='grey'>
       {selectedDevice?.ram}
      </Text>
      </Stack>

      <Stack direction='row'>
      <Text as='b' minW={100}>
       ROM
      </Text>
      <Text color='grey'>
       {selectedDevice?.rom}
      </Text>
      </Stack>

      <Stack direction='row'>
      <Text as='b' minW={100}>
       Price
      </Text>
      <Text color='#4299E1'>
      ${selectedDevice?.price}
      </Text>
      </Stack>
    </CardBody>

    <CardFooter>
        <ButtonGroup>
        <Button variant='outline' colorScheme='blue' onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={onCartAddHandler}>
        Add to cart
      </Button>
      </ButtonGroup>
    </CardFooter>
  </Stack>
</Card>
    </Container>
  )
}

export default Details;

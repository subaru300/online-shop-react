import { Container } from '@chakra-ui/react'
import styles from './ForClients.module.css'
import { Link } from 'react-router-dom';

const ForClients = () => {
  return (
    <Container minHeight="85vh"> 
      <p className={styles.text}>Clients page (soon)</p>
      <Link to='/catalogue'><a className={styles.backLink}>Go to the previous page</a></Link>
    </Container>
  )
}

export default ForClients;

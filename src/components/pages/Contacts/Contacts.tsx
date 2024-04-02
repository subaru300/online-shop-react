import { Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <Container minHeight="85vh"> 
      <p className={styles.text}>Contacts page (soon)</p>
      <Link to='/catalogue'><a className={styles.backLink}>Go to the previous page</a></Link>
    </Container>
  )
}

export default Contacts

import { Container } from "@chakra-ui/react"
import styles from './ForPartners.module.css'
import { Link } from "react-router-dom"

const ForPartners = () => {
  return (
    <Container minHeight="85vh"> 
      <p className={styles.text}>Partners page (soon)</p>
      <Link to='/catalogue'><a className={styles.backLink}>Go to the previous page</a></Link>
    </Container>
  )
}

export default ForPartners

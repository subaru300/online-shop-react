import { Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from './News.module.css'

const News = () => {
  return (
    <Container minHeight="85vh"> 
      <p className={styles.text}>News page (soon)</p>
      <Link to='/catalogue'><a className={styles.backLink}>Go to the previous page</a></Link>
    </Container>
  )
}

export default News

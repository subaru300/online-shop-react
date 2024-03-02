import styles from './error.module.css';
import image from '../../../images/Error/404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  
    return (
      <div className={styles.errorContainer}>
        <Link to='/home' className={styles.homeLink}>Go to Home Page</Link>
        <img src={image} className={styles.errorImage}/>
      </div>
    );
  }
  
  export default ErrorPage;
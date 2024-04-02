import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

interface Props {
    isFooter: boolean;
}

const Menu = ({ isFooter }: Props) => {
    return (
        <div>
            <ul className={`${styles.list} ${isFooter ? styles.footerList : ''}`}>
                <Link to={'/clients'}><li>For clients</li></Link>
                <Link to={'/partners'}><li>For partners</li></Link>
                <Link to={'/sale'}><li>Sale</li></Link>
                <Link to={'/news'}><li>News</li></Link>
                <Link to={'/contacts'}><li>Contacts</li></Link>
            </ul>
        </div>
    );
};

export default Menu;

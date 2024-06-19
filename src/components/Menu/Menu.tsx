import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

interface Props {
    isFooter: boolean;
}

const Menu = ({ isFooter }: Props) => {
    return (
        <div>
            <ul className={`${styles.list} ${isFooter ? styles.footerList : ''}`}>
                <li>
                    <Link to={'/clients'}>For clients</Link>
                </li>
                <li>
                    <Link to={'/partners'}>For partners</Link>
                </li>
                <li>
                    <Link to={'/sale'}>Sale</Link>
                </li>
                <li>
                    <Link to={'/news'}>News</Link>
                </li>
                <li>
                    <Link to={'/contacts'}>Contacts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={styles.list}>
                <li>For clients</li>
                <li>For partners</li>
                <li>Sale</li>
                <li>News</li>
                <li>Contacts</li>
            </ul>
        </div>
    );
};

export default Menu;

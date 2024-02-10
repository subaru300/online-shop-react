import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import styles from './SideFilter.module.css';
import { SideFilterProps } from '../../interfaces/interfaces';

const buttons = [
    {
        title: 'Apple',
    },
    {
        title: 'Samsung',
    },
    {
        title: 'Xiaomi',
    },
];

const SideFilter: React.FC<SideFilterProps> = ({ onChoseBrand }) => {
    const [activeBtnTitle, setActiveBtnTitle] = useState('Apple');

    const onClickHandler = (title: string) => {
        setActiveBtnTitle(title);
        onChoseBrand(title);
    };

    return <Box>
        <h3 className={styles.header}>Catalogue</h3>
        <Box className={styles.btnsContainer}>
            {buttons.map((btn, index) => {
                return <Button key={index} onClick={() => onClickHandler(btn.title)} isActive={activeBtnTitle === btn.title}>{btn.title}</Button>
            })
            }
        </Box>
    </Box>
};

export default SideFilter;
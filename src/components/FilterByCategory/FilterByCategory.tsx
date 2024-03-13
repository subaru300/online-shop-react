import { Button, Card } from '@chakra-ui/react';
import styles from './FilterByCategory.module.css';

const buttons = [
    {
        title: 'All',
    },
    {
        title: 'Apple iPhone',
    },
    {
        title: 'Apple MacBook',
    },
    {
        title: 'Apple Watch',
    },
];

interface Props {
    onClickHandler: (title: string) => void;
    activeBtnTitle: string;
}

const FilterByCategory = ({ onClickHandler, activeBtnTitle }: Props) => {
    return (
        <div>
            <h4 className={styles.header}>Category</h4>
            <Card className={styles.btnsContainer}>
                {buttons.map((btn, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => onClickHandler(btn.title)}
                            isActive={activeBtnTitle === btn.title}
                        >
                            {btn.title}
                        </Button>
                    );
                })}
            </Card>
        </div>
    );
};

export default FilterByCategory;

import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { SideFilterProps } from '../../interfaces/interfaces';
import FilterByCategory from '../FilterByCategory/FilterByCategory';
import FilterByModel from '../FilterByModel/FilterByModel';
import styles from './SideFilter.module.css';

const SideFilter: React.FC<SideFilterProps> = ({
    onChoseCategory,
    chosenCategory,
    filteredByCategory,
    onModelChangeHandler,
}) => {
    const [activeBtnTitle, setActiveBtnTitle] = useState('All');
    const [selectedModels, setSelectedModels] = useState<string[]>([]);

    const onClickHandler = (title: string) => {
        setSelectedModels([]);

        const categoryCheck = (title: string) => {
            if (title === 'All') return title;

            return title.split(' ')[1];
        };
        const checkedCategory = categoryCheck(title);

        setActiveBtnTitle(title);
        onChoseCategory(checkedCategory);
    };

    return (
        <Box className={styles.sideMenuContainer}>
            <FilterByCategory onClickHandler={onClickHandler} activeBtnTitle={activeBtnTitle} />
            {chosenCategory !== 'All' && (
                <FilterByModel
                    filteredByCategory={filteredByCategory}
                    onModelChangeHandler={onModelChangeHandler}
                    selectedModels={selectedModels}
                    setSelectedModels={setSelectedModels}
                />
            )}
        </Box>
    );
};

export default SideFilter;
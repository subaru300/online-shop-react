import { useEffect, useState, useMemo } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import SpinnerComp from '../Spinner/SpinnerComp';
import DeviceList from '../DeviceList/DeviceList';
import SideFilter from '../SideFilter/SideFilter';
import styles from './Main.module.css';
import { loadedDevicesStore } from '../../store';
import { observer } from 'mobx-react';

const Main = observer(() => {
    const loadedDevices = loadedDevicesStore.loadedDevices;
    const isLoading = loadedDevicesStore.isLoading;
    const error = loadedDevicesStore.error;
    
    const [chosenCategory, setChosenCategory] = useState<string>('All');
    const [chosenModels, setChosenModels] = useState<string[]>([]);

    const filteredByCategory = useMemo(() => {
        if (chosenCategory === 'All') {
            setChosenModels([]);
            return loadedDevices;
        }

        return loadedDevices.filter((device) => device.name.split(' ')[1] === chosenCategory);
    }, [loadedDevices, chosenCategory]);

    const filteredByModel = useMemo(() => {
        if (chosenModels.length === 0) {
            return filteredByCategory;
        }

        return filteredByCategory.filter((device) => chosenModels.includes(device.name));
    }, [filteredByCategory, chosenModels]);

    let finalDevices = filteredByModel;

    if (finalDevices.length === 0) {
        finalDevices = filteredByCategory;
    }

    useEffect(() => {
        loadedDevicesStore.loadDevices();
    }, [])

    const onModelChangeHandler = (selectedModels: string[]) => {
        setChosenModels(selectedModels);
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.menu}>
                <SideFilter
                    onChoseCategory={setChosenCategory}
                    chosenCategory={chosenCategory}
                    filteredByCategory={filteredByCategory}
                    onModelChangeHandler={onModelChangeHandler}
                />
            </Box>
            <Divider orientation="vertical" />

            {error && <Box className={styles.error}>{error}</Box>   }
            {isLoading &&  <Box className={styles.page}>
                                <SpinnerComp />
                           </Box>}
            {!isLoading && <Box className={styles.page}>
                <DeviceList devices={finalDevices} />
            </Box>}
        </Box>
    );
});

export default Main;
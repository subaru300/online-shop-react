import { useContext, useEffect, useState, useMemo } from "react";
import { Box, Divider, useToast } from "@chakra-ui/react";
import { CartContext } from "../cart/CartContext";
import SpinnerComp from "../Spinner/SpinnerComp";
import DeviceList from "../DeviceList/DeviceList";
import SideFilter from "../SideFilter/SideFilter";
import { LoadedDevice } from "../../interfaces/interfaces"; 
import fetchData from "../../api/fetchData";
import styles from './Main.module.css';

const Main = () => {
    const [loadedDevices, setLoadedDevices] = useState<LoadedDevice[]>([]);

    const [chosenCategory, setChosenCategory] = useState<string>('All');
    const [chosenModels, setChosenModels] = useState<string[]>([]);
    const { cartItems } = useContext(CartContext);
    const toast = useToast();

    const filteredByCategory = useMemo(() => {
        if (chosenCategory === 'All') {
            return loadedDevices;
        }

        return loadedDevices.filter((device) => (
            device.name.split(' ')[1] === chosenCategory
        ));
    }, [loadedDevices, chosenCategory]);

    const filteredByModel = useMemo(() => {
        if (chosenModels.length === 0) {
            return filteredByCategory;
        }

        return filteredByCategory.filter((device) => (
            chosenModels.includes(device.name)
        ));
    }, [filteredByCategory, chosenModels]);

    let finalDevices = filteredByModel;

    if (finalDevices.length === 0) {
        finalDevices = filteredByCategory;
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const devicesData = await fetchData();
                setLoadedDevices(devicesData);
            } catch (error) {
                console.error(error);
            }
        };
        loadData();
    }, []);

    const onModelChangeHandler = (selectedModels: string[]) => {
        setChosenModels(selectedModels);
    };

    useEffect(() => {
        if (cartItems.length === 0) return;
        toast({
            title: `Your Cart was changed`,
            status: 'info',
            duration: 1000,
            isClosable: true,
          })
    }, [cartItems])

    return (
        <Box className={styles.container}>
            <Box className={styles.menu}>
                <SideFilter 
                    onChoseCategory={setChosenCategory} 
                    chosenCategory={chosenCategory}
                    loadedDevices={loadedDevices}
                    filteredByCategory={filteredByCategory}
                    onModelChangeHandler={onModelChangeHandler}/>
            </Box>
            <Divider orientation="vertical"/>

            {finalDevices.length === 0
                ?   <Box className={styles.page}>
                        <SpinnerComp/>
                    </Box> 
                :   <Box className={styles.page}>
                        <DeviceList devices={finalDevices}/>
                    </Box>}

        </Box>
    )
};

export default Main;